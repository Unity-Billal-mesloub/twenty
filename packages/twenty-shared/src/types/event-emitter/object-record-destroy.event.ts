import { ObjectRecordBaseEvent } from './object-record.base.event';

export class ObjectRecordDestroyEvent<
  T = object,
> extends ObjectRecordBaseEvent<T> {
  properties: {
    before: T;
  };
}
