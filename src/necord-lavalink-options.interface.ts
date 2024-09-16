import { ManagerOptions } from 'lavalink-client';

// Make sendToShard method optional
export type NecordLavalinkModuleOptions = Omit<ManagerOptions, 'sendToShard'> & {
	sendToShard?: (guildId: string, packet: any) => void;
};
