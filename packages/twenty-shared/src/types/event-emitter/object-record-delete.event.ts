import { ObjectRecordBaseEvent } from './object-record.base.event';

export class ObjectRecordDeleteEvent<
  T = object,
> extends ObjectRecordBaseEvent<T> {
  properties: {
    before: T;
  };
}
