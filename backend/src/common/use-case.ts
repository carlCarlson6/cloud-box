export interface UseCase<TIn, TOut> {
    execute(input: TIn): TOut;
}