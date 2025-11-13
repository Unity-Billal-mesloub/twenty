import { ObjectRecordBaseEvent } from './object-record.base.event';

export class ObjectRecordCreateEvent<
  T = object,
> extends ObjectRecordBaseEvent<T> {
  properties: {
    after: T;
  };
}
