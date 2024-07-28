import fs from "node:fs";
import path from "node:path";

const logDir = path.join(__dirname, "../logs");
const logFileName = "task-log.txt";
const logFilePath = path.join(logDir, logFileName);

const ensureLogDirectoryExists = () => {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
};

export const LogMessage = (message: string) => {
  ensureLogDirectoryExists();
  fs.appendFile(
    logFilePath,
    `${new Date().toISOString()}: ${message}\n`,
    (err) => {
      if (err) {
        throw new Error(`Error writing to log file: ${err}`);
      }
    }
  );
};
