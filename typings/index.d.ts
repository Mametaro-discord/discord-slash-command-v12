import {
  Client,
  Snowflake,
  Guild,
  Collection,
  BaseManager
} from "discord.js";

export function main(client:Client): void;

declare type ApplicationCommandTypes = "CHAT_INPUT" | "USER" | "MESSAGE";

declare type ApplicationCommandPermissionsTypes = "ROLE" | "USER";

export class Base {
	public client: Client;
}

export type ApplicationCommandPermissionsFetchOptions = {
  guildId?: Snowflake;
  commandId?: Snowflake;
};

export type ApplicationCommandPermissionsSetOptions = ApplicationCommandPermissionsFetchOptions & {
  permissions: ApplicationCommandPermissions[];
  fullPermissions: FullApplicationCommandPermissions[];
};

export type ApplicationCommandPermissions = {
  id: Snowflake;
  type: ApplicationCommandPermissionsTypes;
  permission: boolean;
};

export type ChannelTypes = "GUILD_TEXT" | "DM" | "GUILD_VOICE" | "GROUP_DM" | "GUILD_CATEGORY" | "GUILD_NEWS" | "GUILD_STORE" | "GUILD_NEWS_THREAD" | "GUILD_PUBLIC_THREAD" | "GUILD_PRIVATE_THREAD" | "GUILD_STAGE_VOICE";

export type	ApplicationCommandOptionsChoices = {
  name: string;
  value: string | number;
};

export type ApplicationCommandOptions = {
  autocomplete?: boolean;
  channel_types?: ChannelTypes[];
  choices?: ApplicationCommandOptionsChoices[]
};

export type ApplicationCommandOptionsTypes = "SUB_COMMAND" | "SUB_COMMAND_GROUP" | "STRING" | "INTEGER" | "BOOLEAN" | "USER" | "CHANNEL" | "ROLE" | "MENTIONABLE" | "NUMBER";

export type ApplicationCommandData = {
  applicationId: Snowflake;
  default_permission?: boolean;
  guildId?: Snowflake;
  id: Snowflake;
  options?: ApplicationCommandOptions[];
  description: string;
  name: string;
  required?: boolean;
  type: ApplicationCommandOptionsTypes;
};

export type ApplicationCommandResolvable = ApplicationCommand | Snowflake;

export type ApplicationCommandPermissionsAddOptions = {
  guildId?: Snowflake;
  commandId: Snowflake;
  permissions: ApplicationCommandPermissions[];
};

export type ApplicationCommandPermissionsRemoveOptions = {
  guildId?: Snowflake;
  commandId: Snowflake;
  users?: Snowflake[];
  roles?: Snowflake[];
};

export type ApplicationCommandPermissionsHasOptions = {
  guildId?: Snowflake;
  commandId: Snowflake;
  id: Snowflake;
};

export type ApplicationCommandPermissionsCommandPathOptions = {
  commandId: Snowflake,
  guildId?: Snowflake
}

export class ApplicationCommandManager extends BaseManager<Snowflake, {},ApplicationCommandResolvable> {
  protected constructor(client: Client, iterable: Array<"Structure">, holds: unknown);
  get permissions(): ApplicationCommandPermissionsManager;
  add(data: ApplicationCommandData, cache:boolean, guildId: unknown): unknown; 
  commandPath(options:ApplicationCommandPermissionsCommandPathOptions): unknown;
  create(data: ApplicationCommandData, guildId?: Snowflake): Promise<ApplicationCommand>;
}

export class ApplicationCommandPermissionsManager extends Base {
  protected constructor(manager: ApplicationCommand | ApplicationCommandManager | GuildApplicationCommandManager);
  public manager: ApplicationCommand | ApplicationCommandManager | GuildApplicationCommandManager;
  public guild: Guild
  public guildId: Snowflake | null;
  public commandId: Snowflake | null;
  permissionsPath(guildId: Snowflake, commandId: Snowflake): unknown;
  fetch(options: ApplicationCommandPermissionsFetchOptions): Promise<ApplicationCommandPermissions[] | Collection<Snowflake, ApplicationCommandPermissions[]>>;
  set(options: ApplicationCommandPermissionsSetOptions): Promise<ApplicationCommandPermissions[] | Collection<Snowflake, ApplicationCommandPermissions[]>>;
  add(options: ApplicationCommandPermissionsAddOptions): Promise<ApplicationCommandPermissions[]>;
  remove(options: ApplicationCommandPermissionsRemoveOptions): Promise<ApplicationCommandPermissions[]>;
  has(options: ApplicationCommandPermissionsHasOptions): Promise<boolean>;
}

export class ApplicationCommand extends Base {
  protected constructor(client: Client, data: unknown, guild: Guild, guildId: Snowflake);
  public id: Snowflake;
  public applicationId: Snowflake;
  public guild: Guild | null;
  public guildId: Snowflake | null;
  public type: ApplicationCommandTypes;
  get createdTimestamp(): number;
  get createdAt(): Date;
  get manager(): ApplicationCommandManager;
  get permissions(): ApplicationCommandPermissionsManager;
  patch(data: Partial<ApplicationCommandData>): void;
  edit(data: ApplicationCommandData): Promise<ApplicationCommand>;
  delete(): Promise<ApplicationCommand>;
  static transformOptions(): ApplicationCommandData;
}

