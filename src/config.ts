import dotenv from "dotenv";

dotenv.config();

const {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    CLIENT_ID,
    CHANNEL_ID,
    DISCORD_GUILD_ID,
} = process.env;

const resolvedClientId = DISCORD_CLIENT_ID ?? CLIENT_ID;

if (!DISCORD_TOKEN || !resolvedClientId || !CHANNEL_ID) {
    throw new Error("Missing environment variables");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID: resolvedClientId,
    CHANNEL_ID,
    DISCORD_GUILD_ID,
};
