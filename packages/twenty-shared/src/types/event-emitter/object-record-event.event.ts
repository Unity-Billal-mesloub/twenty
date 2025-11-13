import { type ObjectRecordCreateEvent } from './object-record-create.event';
import { type ObjectRecordDeleteEvent } from './object-record-delete.event';
import { type ObjectRecordDestroyEvent } from './object-record-destroy.event';
import { type ObjectRecordRestoreEvent } from './object-record-restore.event';
import { type ObjectRecordUpdateEvent } from './object-record-update.event';
import { type ObjectRecordUpsertEvent } from './object-record-upsert.event';

export type ObjectRecordEvent<T = object> =
  | ObjectRecordUpdateEvent<T>
  | ObjectRecordDeleteEvent<T>
  | ObjectRecordCreateEvent<T>
  | ObjectRecordDestroyEvent<T>
  | ObjectRecordRestoreEvent<T>
  | ObjectRecordUpsertEvent<T>;
