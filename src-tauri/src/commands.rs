use std::net::TcpStream;

use serde::Deserialize;
use ssh2::Session;
use ts_rs::TS;

use crate::error::CS2PlugError;

#[derive(Deserialize, TS)]
#[ts(export)]
pub struct ServerCredentials {
    pub ip_address: String,
    pub port: String,
    pub username: String,
    pub password: String,
}

#[tauri::command]
pub fn connect(creds: ServerCredentials) -> Result<String, CS2PlugError> {
    let connecion_string = format!("{}:{}", creds.ip_address, creds.port);
    let tcp = TcpStream::connect(connecion_string)?;

    let mut session = Session::new()?;
    session.set_tcp_stream(tcp);
    session.handshake()?;

    Ok(format!("ip: {}, port: {}", creds.ip_address, creds.port))
}
