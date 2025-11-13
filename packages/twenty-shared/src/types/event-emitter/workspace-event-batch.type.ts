export type WorkspaceEventBatch<WorkspaceEvent> = {
  name: string;
  workspaceId: string;
  objectMetadata: {
    id: string;
    nameSingular: string;
  };
  events: WorkspaceEvent[];
};
