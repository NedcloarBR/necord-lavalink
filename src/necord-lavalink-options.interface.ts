import { ManagerOptions } from 'lavalink-client';

export type NecordLavalinkModuleOptions = Omit<ManagerOptions, 'sendToShard'> & {
	sendToShard?: ManagerOptions['sendToShard'];
};
