import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from "discord.js";
import { config } from "../config";

export const data = new SlashCommandBuilder()
    .setName("조회")
    .setDescription("버튼을 눌러 HTTP 데이터를 조회합니다.");

export async function execute(interaction: ChatInputCommandInteraction) {
    if (interaction.channelId !== config.CHANNEL_ID) {
        await interaction.reply({
            content: "이 명령어는 지정된 채널에서만 사용할 수 있습니다.",
            ephemeral: true,
        });
        return;
    }

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
            .setCustomId("fetch_value")
            .setLabel("HTTP 값 불러오기")
            .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({
        content: "아래 버튼을 누르면 HTTP 통신으로 값을 받아옵니다.",
        components: [row],
    });
}
