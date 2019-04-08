const fs = require('fs');
const config = require('./../config');
const { createLogger, format, transports } = require('winston');
const { combine, colorize, timestamp, printf } = format;

const logDir = "logs";

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFormat = printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`,
);

const logger = createLogger({
    level: config.get('env') == 'development' ? "debug" : "info",
    format: combine(timestamp(), format.json()),
    transports: [
      new transports.File({ filename: "logs/error.log", level: "error" }),
      new transports.File({ filename: "logs/combined.log", level: "info" }),
    ],
    exceptionHandlers: [
      new transports.File({ filename: 'logs/exceptions.log' })
    ]
  });

if (config.get('env') == 'development') {
    logger.add(
      new transports.Console({
        format: combine(colorize(), timestamp(), logFormat),
        handleExceptions: true
      }),
    );
  }

logger.exitOnError = false;

module.exports = logger;