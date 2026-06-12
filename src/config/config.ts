import dotenv from 'dotenv';

dotenv.config({ quiet: true });

function getEnvVar(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env = {
  baseUrl: getEnvVar('BASE_URL'),
  username: getEnvVar('USERNAME'),
  password: getEnvVar('PASSWORD'),
};
