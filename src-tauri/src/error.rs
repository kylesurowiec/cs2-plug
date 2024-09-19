use thiserror::Error;

#[derive(Error, Debug)]
pub enum CS2PlugError {
    #[error("IO error: {0}")]
    IoError(#[from] std::io::Error),

    #[error("SSH2 error: {0}")]
    Ssh2Error(#[from] ssh2::Error),
}

impl From<CS2PlugError> for tauri::InvokeError {
    fn from(val: CS2PlugError) -> Self {
        tauri::InvokeError::from(val.to_string())
    }
}
