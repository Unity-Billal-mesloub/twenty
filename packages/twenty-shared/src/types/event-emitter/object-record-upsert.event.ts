import { type ObjectRecordDiff } from './object-record-diff';
import { ObjectRecordBaseEvent } from './object-record.base.event';

export class ObjectRecordUpsertEvent<
  T = object,
> extends ObjectRecordBaseEvent<T> {
  properties: {
    before?: T;
    after: T;
    diff?: Partial<ObjectRecordDiff<T>>;
    updatedFields?: string[];
  };
}
