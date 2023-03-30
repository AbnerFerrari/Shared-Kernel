export abstract class EntityBase<TId>{
  public id: TId
  public createdAt: Date
  public deletedAt: Date | null
}