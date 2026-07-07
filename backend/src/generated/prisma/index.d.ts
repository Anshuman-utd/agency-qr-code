
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model AgencyUser
 * 
 */
export type AgencyUser = $Result.DefaultSelection<Prisma.$AgencyUserPayload>
/**
 * Model QRIssuance
 * 
 */
export type QRIssuance = $Result.DefaultSelection<Prisma.$QRIssuancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QrStatus: {
  ACTIVE: 'ACTIVE',
  REVOKED: 'REVOKED'
};

export type QrStatus = (typeof QrStatus)[keyof typeof QrStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QrStatus = $Enums.QrStatus

export const QrStatus: typeof $Enums.QrStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Agencies
 * const agencies = await prisma.agency.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Agencies
   * const agencies = await prisma.agency.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agencyUser`: Exposes CRUD operations for the **AgencyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgencyUsers
    * const agencyUsers = await prisma.agencyUser.findMany()
    * ```
    */
  get agencyUser(): Prisma.AgencyUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRIssuance`: Exposes CRUD operations for the **QRIssuance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRIssuances
    * const qRIssuances = await prisma.qRIssuance.findMany()
    * ```
    */
  get qRIssuance(): Prisma.QRIssuanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Agency: 'Agency',
    AgencyUser: 'AgencyUser',
    QRIssuance: 'QRIssuance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agency" | "agencyUser" | "qRIssuance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      AgencyUser: {
        payload: Prisma.$AgencyUserPayload<ExtArgs>
        fields: Prisma.AgencyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          findFirst: {
            args: Prisma.AgencyUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          findMany: {
            args: Prisma.AgencyUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>[]
          }
          create: {
            args: Prisma.AgencyUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          createMany: {
            args: Prisma.AgencyUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>[]
          }
          delete: {
            args: Prisma.AgencyUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          update: {
            args: Prisma.AgencyUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          deleteMany: {
            args: Prisma.AgencyUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyUserPayload>
          }
          aggregate: {
            args: Prisma.AgencyUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgencyUser>
          }
          groupBy: {
            args: Prisma.AgencyUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyUserCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyUserCountAggregateOutputType> | number
          }
        }
      }
      QRIssuance: {
        payload: Prisma.$QRIssuancePayload<ExtArgs>
        fields: Prisma.QRIssuanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRIssuanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRIssuanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          findFirst: {
            args: Prisma.QRIssuanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRIssuanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          findMany: {
            args: Prisma.QRIssuanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>[]
          }
          create: {
            args: Prisma.QRIssuanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          createMany: {
            args: Prisma.QRIssuanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QRIssuanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>[]
          }
          delete: {
            args: Prisma.QRIssuanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          update: {
            args: Prisma.QRIssuanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          deleteMany: {
            args: Prisma.QRIssuanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRIssuanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QRIssuanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>[]
          }
          upsert: {
            args: Prisma.QRIssuanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRIssuancePayload>
          }
          aggregate: {
            args: Prisma.QRIssuanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRIssuance>
          }
          groupBy: {
            args: Prisma.QRIssuanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRIssuanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRIssuanceCountArgs<ExtArgs>
            result: $Utils.Optional<QRIssuanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    agency?: AgencyOmit
    agencyUser?: AgencyUserOmit
    qRIssuance?: QRIssuanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgencyCountOutputType
   */

  export type AgencyCountOutputType = {
    users: number
    qrTokens: number
  }

  export type AgencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AgencyCountOutputTypeCountUsersArgs
    qrTokens?: boolean | AgencyCountOutputTypeCountQrTokensArgs
  }

  // Custom InputTypes
  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyCountOutputType
     */
    select?: AgencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyUserWhereInput
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountQrTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRIssuanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    code: string
    createdAt: Date
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    users?: boolean | Agency$usersArgs<ExtArgs>
    qrTokens?: boolean | Agency$qrTokensArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Agency$usersArgs<ExtArgs>
    qrTokens?: boolean | Agency$qrTokensArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      users: Prisma.$AgencyUserPayload<ExtArgs>[]
      qrTokens: Prisma.$QRIssuancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      createdAt: Date
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Agency$usersArgs<ExtArgs> = {}>(args?: Subset<T, Agency$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrTokens<T extends Agency$qrTokensArgs<ExtArgs> = {}>(args?: Subset<T, Agency$qrTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly code: FieldRef<"Agency", 'String'>
    readonly createdAt: FieldRef<"Agency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency.users
   */
  export type Agency$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    where?: AgencyUserWhereInput
    orderBy?: AgencyUserOrderByWithRelationInput | AgencyUserOrderByWithRelationInput[]
    cursor?: AgencyUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyUserScalarFieldEnum | AgencyUserScalarFieldEnum[]
  }

  /**
   * Agency.qrTokens
   */
  export type Agency$qrTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    where?: QRIssuanceWhereInput
    orderBy?: QRIssuanceOrderByWithRelationInput | QRIssuanceOrderByWithRelationInput[]
    cursor?: QRIssuanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QRIssuanceScalarFieldEnum | QRIssuanceScalarFieldEnum[]
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model AgencyUser
   */

  export type AggregateAgencyUser = {
    _count: AgencyUserCountAggregateOutputType | null
    _min: AgencyUserMinAggregateOutputType | null
    _max: AgencyUserMaxAggregateOutputType | null
  }

  export type AgencyUserMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AgencyUserMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type AgencyUserCountAggregateOutputType = {
    id: number
    agencyId: number
    name: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type AgencyUserMinAggregateInputType = {
    id?: true
    agencyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type AgencyUserMaxAggregateInputType = {
    id?: true
    agencyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type AgencyUserCountAggregateInputType = {
    id?: true
    agencyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type AgencyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyUser to aggregate.
     */
    where?: AgencyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyUsers to fetch.
     */
    orderBy?: AgencyUserOrderByWithRelationInput | AgencyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgencyUsers
    **/
    _count?: true | AgencyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyUserMaxAggregateInputType
  }

  export type GetAgencyUserAggregateType<T extends AgencyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAgencyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgencyUser[P]>
      : GetScalarType<T[P], AggregateAgencyUser[P]>
  }




  export type AgencyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyUserWhereInput
    orderBy?: AgencyUserOrderByWithAggregationInput | AgencyUserOrderByWithAggregationInput[]
    by: AgencyUserScalarFieldEnum[] | AgencyUserScalarFieldEnum
    having?: AgencyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyUserCountAggregateInputType | true
    _min?: AgencyUserMinAggregateInputType
    _max?: AgencyUserMaxAggregateInputType
  }

  export type AgencyUserGroupByOutputType = {
    id: string
    agencyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    _count: AgencyUserCountAggregateOutputType | null
    _min: AgencyUserMinAggregateOutputType | null
    _max: AgencyUserMaxAggregateOutputType | null
  }

  type GetAgencyUserGroupByPayload<T extends AgencyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyUserGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyUserGroupByOutputType[P]>
        }
      >
    >


  export type AgencyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyUser"]>

  export type AgencyUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyUser"]>

  export type AgencyUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyUser"]>

  export type AgencyUserSelectScalar = {
    id?: boolean
    agencyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type AgencyUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agencyId" | "name" | "email" | "passwordHash" | "role" | "isActive" | "createdAt", ExtArgs["result"]["agencyUser"]>
  export type AgencyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }
  export type AgencyUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }
  export type AgencyUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }

  export type $AgencyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgencyUser"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["agencyUser"]>
    composites: {}
  }

  type AgencyUserGetPayload<S extends boolean | null | undefined | AgencyUserDefaultArgs> = $Result.GetResult<Prisma.$AgencyUserPayload, S>

  type AgencyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyUserCountAggregateInputType | true
    }

  export interface AgencyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgencyUser'], meta: { name: 'AgencyUser' } }
    /**
     * Find zero or one AgencyUser that matches the filter.
     * @param {AgencyUserFindUniqueArgs} args - Arguments to find a AgencyUser
     * @example
     * // Get one AgencyUser
     * const agencyUser = await prisma.agencyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyUserFindUniqueArgs>(args: SelectSubset<T, AgencyUserFindUniqueArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgencyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyUserFindUniqueOrThrowArgs} args - Arguments to find a AgencyUser
     * @example
     * // Get one AgencyUser
     * const agencyUser = await prisma.agencyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserFindFirstArgs} args - Arguments to find a AgencyUser
     * @example
     * // Get one AgencyUser
     * const agencyUser = await prisma.agencyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyUserFindFirstArgs>(args?: SelectSubset<T, AgencyUserFindFirstArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserFindFirstOrThrowArgs} args - Arguments to find a AgencyUser
     * @example
     * // Get one AgencyUser
     * const agencyUser = await prisma.agencyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgencyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgencyUsers
     * const agencyUsers = await prisma.agencyUser.findMany()
     * 
     * // Get first 10 AgencyUsers
     * const agencyUsers = await prisma.agencyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyUserWithIdOnly = await prisma.agencyUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyUserFindManyArgs>(args?: SelectSubset<T, AgencyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgencyUser.
     * @param {AgencyUserCreateArgs} args - Arguments to create a AgencyUser.
     * @example
     * // Create one AgencyUser
     * const AgencyUser = await prisma.agencyUser.create({
     *   data: {
     *     // ... data to create a AgencyUser
     *   }
     * })
     * 
     */
    create<T extends AgencyUserCreateArgs>(args: SelectSubset<T, AgencyUserCreateArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgencyUsers.
     * @param {AgencyUserCreateManyArgs} args - Arguments to create many AgencyUsers.
     * @example
     * // Create many AgencyUsers
     * const agencyUser = await prisma.agencyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyUserCreateManyArgs>(args?: SelectSubset<T, AgencyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgencyUsers and returns the data saved in the database.
     * @param {AgencyUserCreateManyAndReturnArgs} args - Arguments to create many AgencyUsers.
     * @example
     * // Create many AgencyUsers
     * const agencyUser = await prisma.agencyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgencyUsers and only return the `id`
     * const agencyUserWithIdOnly = await prisma.agencyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgencyUser.
     * @param {AgencyUserDeleteArgs} args - Arguments to delete one AgencyUser.
     * @example
     * // Delete one AgencyUser
     * const AgencyUser = await prisma.agencyUser.delete({
     *   where: {
     *     // ... filter to delete one AgencyUser
     *   }
     * })
     * 
     */
    delete<T extends AgencyUserDeleteArgs>(args: SelectSubset<T, AgencyUserDeleteArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgencyUser.
     * @param {AgencyUserUpdateArgs} args - Arguments to update one AgencyUser.
     * @example
     * // Update one AgencyUser
     * const agencyUser = await prisma.agencyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUserUpdateArgs>(args: SelectSubset<T, AgencyUserUpdateArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgencyUsers.
     * @param {AgencyUserDeleteManyArgs} args - Arguments to filter AgencyUsers to delete.
     * @example
     * // Delete a few AgencyUsers
     * const { count } = await prisma.agencyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyUserDeleteManyArgs>(args?: SelectSubset<T, AgencyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgencyUsers
     * const agencyUser = await prisma.agencyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUserUpdateManyArgs>(args: SelectSubset<T, AgencyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyUsers and returns the data updated in the database.
     * @param {AgencyUserUpdateManyAndReturnArgs} args - Arguments to update many AgencyUsers.
     * @example
     * // Update many AgencyUsers
     * const agencyUser = await prisma.agencyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgencyUsers and only return the `id`
     * const agencyUserWithIdOnly = await prisma.agencyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencyUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgencyUser.
     * @param {AgencyUserUpsertArgs} args - Arguments to update or create a AgencyUser.
     * @example
     * // Update or create a AgencyUser
     * const agencyUser = await prisma.agencyUser.upsert({
     *   create: {
     *     // ... data to create a AgencyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgencyUser we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUserUpsertArgs>(args: SelectSubset<T, AgencyUserUpsertArgs<ExtArgs>>): Prisma__AgencyUserClient<$Result.GetResult<Prisma.$AgencyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgencyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserCountArgs} args - Arguments to filter AgencyUsers to count.
     * @example
     * // Count the number of AgencyUsers
     * const count = await prisma.agencyUser.count({
     *   where: {
     *     // ... the filter for the AgencyUsers we want to count
     *   }
     * })
    **/
    count<T extends AgencyUserCountArgs>(
      args?: Subset<T, AgencyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgencyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencyUserAggregateArgs>(args: Subset<T, AgencyUserAggregateArgs>): Prisma.PrismaPromise<GetAgencyUserAggregateType<T>>

    /**
     * Group by AgencyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyUserGroupByArgs['orderBy'] }
        : { orderBy?: AgencyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgencyUser model
   */
  readonly fields: AgencyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgencyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgencyUser model
   */
  interface AgencyUserFieldRefs {
    readonly id: FieldRef<"AgencyUser", 'String'>
    readonly agencyId: FieldRef<"AgencyUser", 'String'>
    readonly name: FieldRef<"AgencyUser", 'String'>
    readonly email: FieldRef<"AgencyUser", 'String'>
    readonly passwordHash: FieldRef<"AgencyUser", 'String'>
    readonly role: FieldRef<"AgencyUser", 'Role'>
    readonly isActive: FieldRef<"AgencyUser", 'Boolean'>
    readonly createdAt: FieldRef<"AgencyUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgencyUser findUnique
   */
  export type AgencyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter, which AgencyUser to fetch.
     */
    where: AgencyUserWhereUniqueInput
  }

  /**
   * AgencyUser findUniqueOrThrow
   */
  export type AgencyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter, which AgencyUser to fetch.
     */
    where: AgencyUserWhereUniqueInput
  }

  /**
   * AgencyUser findFirst
   */
  export type AgencyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter, which AgencyUser to fetch.
     */
    where?: AgencyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyUsers to fetch.
     */
    orderBy?: AgencyUserOrderByWithRelationInput | AgencyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyUsers.
     */
    cursor?: AgencyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyUsers.
     */
    distinct?: AgencyUserScalarFieldEnum | AgencyUserScalarFieldEnum[]
  }

  /**
   * AgencyUser findFirstOrThrow
   */
  export type AgencyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter, which AgencyUser to fetch.
     */
    where?: AgencyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyUsers to fetch.
     */
    orderBy?: AgencyUserOrderByWithRelationInput | AgencyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyUsers.
     */
    cursor?: AgencyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyUsers.
     */
    distinct?: AgencyUserScalarFieldEnum | AgencyUserScalarFieldEnum[]
  }

  /**
   * AgencyUser findMany
   */
  export type AgencyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter, which AgencyUsers to fetch.
     */
    where?: AgencyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyUsers to fetch.
     */
    orderBy?: AgencyUserOrderByWithRelationInput | AgencyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgencyUsers.
     */
    cursor?: AgencyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyUsers.
     */
    distinct?: AgencyUserScalarFieldEnum | AgencyUserScalarFieldEnum[]
  }

  /**
   * AgencyUser create
   */
  export type AgencyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AgencyUser.
     */
    data: XOR<AgencyUserCreateInput, AgencyUserUncheckedCreateInput>
  }

  /**
   * AgencyUser createMany
   */
  export type AgencyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgencyUsers.
     */
    data: AgencyUserCreateManyInput | AgencyUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgencyUser createManyAndReturn
   */
  export type AgencyUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * The data used to create many AgencyUsers.
     */
    data: AgencyUserCreateManyInput | AgencyUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyUser update
   */
  export type AgencyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AgencyUser.
     */
    data: XOR<AgencyUserUpdateInput, AgencyUserUncheckedUpdateInput>
    /**
     * Choose, which AgencyUser to update.
     */
    where: AgencyUserWhereUniqueInput
  }

  /**
   * AgencyUser updateMany
   */
  export type AgencyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgencyUsers.
     */
    data: XOR<AgencyUserUpdateManyMutationInput, AgencyUserUncheckedUpdateManyInput>
    /**
     * Filter which AgencyUsers to update
     */
    where?: AgencyUserWhereInput
    /**
     * Limit how many AgencyUsers to update.
     */
    limit?: number
  }

  /**
   * AgencyUser updateManyAndReturn
   */
  export type AgencyUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * The data used to update AgencyUsers.
     */
    data: XOR<AgencyUserUpdateManyMutationInput, AgencyUserUncheckedUpdateManyInput>
    /**
     * Filter which AgencyUsers to update
     */
    where?: AgencyUserWhereInput
    /**
     * Limit how many AgencyUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyUser upsert
   */
  export type AgencyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AgencyUser to update in case it exists.
     */
    where: AgencyUserWhereUniqueInput
    /**
     * In case the AgencyUser found by the `where` argument doesn't exist, create a new AgencyUser with this data.
     */
    create: XOR<AgencyUserCreateInput, AgencyUserUncheckedCreateInput>
    /**
     * In case the AgencyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUserUpdateInput, AgencyUserUncheckedUpdateInput>
  }

  /**
   * AgencyUser delete
   */
  export type AgencyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
    /**
     * Filter which AgencyUser to delete.
     */
    where: AgencyUserWhereUniqueInput
  }

  /**
   * AgencyUser deleteMany
   */
  export type AgencyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyUsers to delete
     */
    where?: AgencyUserWhereInput
    /**
     * Limit how many AgencyUsers to delete.
     */
    limit?: number
  }

  /**
   * AgencyUser without action
   */
  export type AgencyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyUser
     */
    select?: AgencyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyUser
     */
    omit?: AgencyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyUserInclude<ExtArgs> | null
  }


  /**
   * Model QRIssuance
   */

  export type AggregateQRIssuance = {
    _count: QRIssuanceCountAggregateOutputType | null
    _min: QRIssuanceMinAggregateOutputType | null
    _max: QRIssuanceMaxAggregateOutputType | null
  }

  export type QRIssuanceMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    token: string | null
    status: $Enums.QrStatus | null
    issuedAt: Date | null
    createdBy: string | null
    labelText: string | null
  }

  export type QRIssuanceMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    token: string | null
    status: $Enums.QrStatus | null
    issuedAt: Date | null
    createdBy: string | null
    labelText: string | null
  }

  export type QRIssuanceCountAggregateOutputType = {
    id: number
    agencyId: number
    token: number
    status: number
    issuedAt: number
    createdBy: number
    labelText: number
    _all: number
  }


  export type QRIssuanceMinAggregateInputType = {
    id?: true
    agencyId?: true
    token?: true
    status?: true
    issuedAt?: true
    createdBy?: true
    labelText?: true
  }

  export type QRIssuanceMaxAggregateInputType = {
    id?: true
    agencyId?: true
    token?: true
    status?: true
    issuedAt?: true
    createdBy?: true
    labelText?: true
  }

  export type QRIssuanceCountAggregateInputType = {
    id?: true
    agencyId?: true
    token?: true
    status?: true
    issuedAt?: true
    createdBy?: true
    labelText?: true
    _all?: true
  }

  export type QRIssuanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRIssuance to aggregate.
     */
    where?: QRIssuanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRIssuances to fetch.
     */
    orderBy?: QRIssuanceOrderByWithRelationInput | QRIssuanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRIssuanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRIssuances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRIssuances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRIssuances
    **/
    _count?: true | QRIssuanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRIssuanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRIssuanceMaxAggregateInputType
  }

  export type GetQRIssuanceAggregateType<T extends QRIssuanceAggregateArgs> = {
        [P in keyof T & keyof AggregateQRIssuance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRIssuance[P]>
      : GetScalarType<T[P], AggregateQRIssuance[P]>
  }




  export type QRIssuanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRIssuanceWhereInput
    orderBy?: QRIssuanceOrderByWithAggregationInput | QRIssuanceOrderByWithAggregationInput[]
    by: QRIssuanceScalarFieldEnum[] | QRIssuanceScalarFieldEnum
    having?: QRIssuanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRIssuanceCountAggregateInputType | true
    _min?: QRIssuanceMinAggregateInputType
    _max?: QRIssuanceMaxAggregateInputType
  }

  export type QRIssuanceGroupByOutputType = {
    id: string
    agencyId: string
    token: string
    status: $Enums.QrStatus
    issuedAt: Date
    createdBy: string | null
    labelText: string | null
    _count: QRIssuanceCountAggregateOutputType | null
    _min: QRIssuanceMinAggregateOutputType | null
    _max: QRIssuanceMaxAggregateOutputType | null
  }

  type GetQRIssuanceGroupByPayload<T extends QRIssuanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRIssuanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRIssuanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRIssuanceGroupByOutputType[P]>
            : GetScalarType<T[P], QRIssuanceGroupByOutputType[P]>
        }
      >
    >


  export type QRIssuanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    token?: boolean
    status?: boolean
    issuedAt?: boolean
    createdBy?: boolean
    labelText?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRIssuance"]>

  export type QRIssuanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    token?: boolean
    status?: boolean
    issuedAt?: boolean
    createdBy?: boolean
    labelText?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRIssuance"]>

  export type QRIssuanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    token?: boolean
    status?: boolean
    issuedAt?: boolean
    createdBy?: boolean
    labelText?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRIssuance"]>

  export type QRIssuanceSelectScalar = {
    id?: boolean
    agencyId?: boolean
    token?: boolean
    status?: boolean
    issuedAt?: boolean
    createdBy?: boolean
    labelText?: boolean
  }

  export type QRIssuanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agencyId" | "token" | "status" | "issuedAt" | "createdBy" | "labelText", ExtArgs["result"]["qRIssuance"]>
  export type QRIssuanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }
  export type QRIssuanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }
  export type QRIssuanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
  }

  export type $QRIssuancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRIssuance"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      token: string
      status: $Enums.QrStatus
      issuedAt: Date
      createdBy: string | null
      labelText: string | null
    }, ExtArgs["result"]["qRIssuance"]>
    composites: {}
  }

  type QRIssuanceGetPayload<S extends boolean | null | undefined | QRIssuanceDefaultArgs> = $Result.GetResult<Prisma.$QRIssuancePayload, S>

  type QRIssuanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRIssuanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRIssuanceCountAggregateInputType | true
    }

  export interface QRIssuanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRIssuance'], meta: { name: 'QRIssuance' } }
    /**
     * Find zero or one QRIssuance that matches the filter.
     * @param {QRIssuanceFindUniqueArgs} args - Arguments to find a QRIssuance
     * @example
     * // Get one QRIssuance
     * const qRIssuance = await prisma.qRIssuance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRIssuanceFindUniqueArgs>(args: SelectSubset<T, QRIssuanceFindUniqueArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRIssuance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRIssuanceFindUniqueOrThrowArgs} args - Arguments to find a QRIssuance
     * @example
     * // Get one QRIssuance
     * const qRIssuance = await prisma.qRIssuance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRIssuanceFindUniqueOrThrowArgs>(args: SelectSubset<T, QRIssuanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRIssuance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceFindFirstArgs} args - Arguments to find a QRIssuance
     * @example
     * // Get one QRIssuance
     * const qRIssuance = await prisma.qRIssuance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRIssuanceFindFirstArgs>(args?: SelectSubset<T, QRIssuanceFindFirstArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRIssuance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceFindFirstOrThrowArgs} args - Arguments to find a QRIssuance
     * @example
     * // Get one QRIssuance
     * const qRIssuance = await prisma.qRIssuance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRIssuanceFindFirstOrThrowArgs>(args?: SelectSubset<T, QRIssuanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRIssuances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRIssuances
     * const qRIssuances = await prisma.qRIssuance.findMany()
     * 
     * // Get first 10 QRIssuances
     * const qRIssuances = await prisma.qRIssuance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRIssuanceWithIdOnly = await prisma.qRIssuance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRIssuanceFindManyArgs>(args?: SelectSubset<T, QRIssuanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRIssuance.
     * @param {QRIssuanceCreateArgs} args - Arguments to create a QRIssuance.
     * @example
     * // Create one QRIssuance
     * const QRIssuance = await prisma.qRIssuance.create({
     *   data: {
     *     // ... data to create a QRIssuance
     *   }
     * })
     * 
     */
    create<T extends QRIssuanceCreateArgs>(args: SelectSubset<T, QRIssuanceCreateArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRIssuances.
     * @param {QRIssuanceCreateManyArgs} args - Arguments to create many QRIssuances.
     * @example
     * // Create many QRIssuances
     * const qRIssuance = await prisma.qRIssuance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRIssuanceCreateManyArgs>(args?: SelectSubset<T, QRIssuanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QRIssuances and returns the data saved in the database.
     * @param {QRIssuanceCreateManyAndReturnArgs} args - Arguments to create many QRIssuances.
     * @example
     * // Create many QRIssuances
     * const qRIssuance = await prisma.qRIssuance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QRIssuances and only return the `id`
     * const qRIssuanceWithIdOnly = await prisma.qRIssuance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QRIssuanceCreateManyAndReturnArgs>(args?: SelectSubset<T, QRIssuanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QRIssuance.
     * @param {QRIssuanceDeleteArgs} args - Arguments to delete one QRIssuance.
     * @example
     * // Delete one QRIssuance
     * const QRIssuance = await prisma.qRIssuance.delete({
     *   where: {
     *     // ... filter to delete one QRIssuance
     *   }
     * })
     * 
     */
    delete<T extends QRIssuanceDeleteArgs>(args: SelectSubset<T, QRIssuanceDeleteArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRIssuance.
     * @param {QRIssuanceUpdateArgs} args - Arguments to update one QRIssuance.
     * @example
     * // Update one QRIssuance
     * const qRIssuance = await prisma.qRIssuance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRIssuanceUpdateArgs>(args: SelectSubset<T, QRIssuanceUpdateArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRIssuances.
     * @param {QRIssuanceDeleteManyArgs} args - Arguments to filter QRIssuances to delete.
     * @example
     * // Delete a few QRIssuances
     * const { count } = await prisma.qRIssuance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRIssuanceDeleteManyArgs>(args?: SelectSubset<T, QRIssuanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRIssuances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRIssuances
     * const qRIssuance = await prisma.qRIssuance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRIssuanceUpdateManyArgs>(args: SelectSubset<T, QRIssuanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRIssuances and returns the data updated in the database.
     * @param {QRIssuanceUpdateManyAndReturnArgs} args - Arguments to update many QRIssuances.
     * @example
     * // Update many QRIssuances
     * const qRIssuance = await prisma.qRIssuance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QRIssuances and only return the `id`
     * const qRIssuanceWithIdOnly = await prisma.qRIssuance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QRIssuanceUpdateManyAndReturnArgs>(args: SelectSubset<T, QRIssuanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QRIssuance.
     * @param {QRIssuanceUpsertArgs} args - Arguments to update or create a QRIssuance.
     * @example
     * // Update or create a QRIssuance
     * const qRIssuance = await prisma.qRIssuance.upsert({
     *   create: {
     *     // ... data to create a QRIssuance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRIssuance we want to update
     *   }
     * })
     */
    upsert<T extends QRIssuanceUpsertArgs>(args: SelectSubset<T, QRIssuanceUpsertArgs<ExtArgs>>): Prisma__QRIssuanceClient<$Result.GetResult<Prisma.$QRIssuancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRIssuances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceCountArgs} args - Arguments to filter QRIssuances to count.
     * @example
     * // Count the number of QRIssuances
     * const count = await prisma.qRIssuance.count({
     *   where: {
     *     // ... the filter for the QRIssuances we want to count
     *   }
     * })
    **/
    count<T extends QRIssuanceCountArgs>(
      args?: Subset<T, QRIssuanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRIssuanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRIssuance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRIssuanceAggregateArgs>(args: Subset<T, QRIssuanceAggregateArgs>): Prisma.PrismaPromise<GetQRIssuanceAggregateType<T>>

    /**
     * Group by QRIssuance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRIssuanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRIssuanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRIssuanceGroupByArgs['orderBy'] }
        : { orderBy?: QRIssuanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRIssuanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRIssuanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRIssuance model
   */
  readonly fields: QRIssuanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRIssuance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRIssuanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QRIssuance model
   */
  interface QRIssuanceFieldRefs {
    readonly id: FieldRef<"QRIssuance", 'String'>
    readonly agencyId: FieldRef<"QRIssuance", 'String'>
    readonly token: FieldRef<"QRIssuance", 'String'>
    readonly status: FieldRef<"QRIssuance", 'QrStatus'>
    readonly issuedAt: FieldRef<"QRIssuance", 'DateTime'>
    readonly createdBy: FieldRef<"QRIssuance", 'String'>
    readonly labelText: FieldRef<"QRIssuance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QRIssuance findUnique
   */
  export type QRIssuanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter, which QRIssuance to fetch.
     */
    where: QRIssuanceWhereUniqueInput
  }

  /**
   * QRIssuance findUniqueOrThrow
   */
  export type QRIssuanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter, which QRIssuance to fetch.
     */
    where: QRIssuanceWhereUniqueInput
  }

  /**
   * QRIssuance findFirst
   */
  export type QRIssuanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter, which QRIssuance to fetch.
     */
    where?: QRIssuanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRIssuances to fetch.
     */
    orderBy?: QRIssuanceOrderByWithRelationInput | QRIssuanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRIssuances.
     */
    cursor?: QRIssuanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRIssuances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRIssuances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRIssuances.
     */
    distinct?: QRIssuanceScalarFieldEnum | QRIssuanceScalarFieldEnum[]
  }

  /**
   * QRIssuance findFirstOrThrow
   */
  export type QRIssuanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter, which QRIssuance to fetch.
     */
    where?: QRIssuanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRIssuances to fetch.
     */
    orderBy?: QRIssuanceOrderByWithRelationInput | QRIssuanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRIssuances.
     */
    cursor?: QRIssuanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRIssuances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRIssuances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRIssuances.
     */
    distinct?: QRIssuanceScalarFieldEnum | QRIssuanceScalarFieldEnum[]
  }

  /**
   * QRIssuance findMany
   */
  export type QRIssuanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter, which QRIssuances to fetch.
     */
    where?: QRIssuanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRIssuances to fetch.
     */
    orderBy?: QRIssuanceOrderByWithRelationInput | QRIssuanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRIssuances.
     */
    cursor?: QRIssuanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRIssuances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRIssuances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRIssuances.
     */
    distinct?: QRIssuanceScalarFieldEnum | QRIssuanceScalarFieldEnum[]
  }

  /**
   * QRIssuance create
   */
  export type QRIssuanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * The data needed to create a QRIssuance.
     */
    data: XOR<QRIssuanceCreateInput, QRIssuanceUncheckedCreateInput>
  }

  /**
   * QRIssuance createMany
   */
  export type QRIssuanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRIssuances.
     */
    data: QRIssuanceCreateManyInput | QRIssuanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRIssuance createManyAndReturn
   */
  export type QRIssuanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * The data used to create many QRIssuances.
     */
    data: QRIssuanceCreateManyInput | QRIssuanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRIssuance update
   */
  export type QRIssuanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * The data needed to update a QRIssuance.
     */
    data: XOR<QRIssuanceUpdateInput, QRIssuanceUncheckedUpdateInput>
    /**
     * Choose, which QRIssuance to update.
     */
    where: QRIssuanceWhereUniqueInput
  }

  /**
   * QRIssuance updateMany
   */
  export type QRIssuanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRIssuances.
     */
    data: XOR<QRIssuanceUpdateManyMutationInput, QRIssuanceUncheckedUpdateManyInput>
    /**
     * Filter which QRIssuances to update
     */
    where?: QRIssuanceWhereInput
    /**
     * Limit how many QRIssuances to update.
     */
    limit?: number
  }

  /**
   * QRIssuance updateManyAndReturn
   */
  export type QRIssuanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * The data used to update QRIssuances.
     */
    data: XOR<QRIssuanceUpdateManyMutationInput, QRIssuanceUncheckedUpdateManyInput>
    /**
     * Filter which QRIssuances to update
     */
    where?: QRIssuanceWhereInput
    /**
     * Limit how many QRIssuances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRIssuance upsert
   */
  export type QRIssuanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * The filter to search for the QRIssuance to update in case it exists.
     */
    where: QRIssuanceWhereUniqueInput
    /**
     * In case the QRIssuance found by the `where` argument doesn't exist, create a new QRIssuance with this data.
     */
    create: XOR<QRIssuanceCreateInput, QRIssuanceUncheckedCreateInput>
    /**
     * In case the QRIssuance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRIssuanceUpdateInput, QRIssuanceUncheckedUpdateInput>
  }

  /**
   * QRIssuance delete
   */
  export type QRIssuanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
    /**
     * Filter which QRIssuance to delete.
     */
    where: QRIssuanceWhereUniqueInput
  }

  /**
   * QRIssuance deleteMany
   */
  export type QRIssuanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRIssuances to delete
     */
    where?: QRIssuanceWhereInput
    /**
     * Limit how many QRIssuances to delete.
     */
    limit?: number
  }

  /**
   * QRIssuance without action
   */
  export type QRIssuanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRIssuance
     */
    select?: QRIssuanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRIssuance
     */
    omit?: QRIssuanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRIssuanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const AgencyUserScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type AgencyUserScalarFieldEnum = (typeof AgencyUserScalarFieldEnum)[keyof typeof AgencyUserScalarFieldEnum]


  export const QRIssuanceScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    token: 'token',
    status: 'status',
    issuedAt: 'issuedAt',
    createdBy: 'createdBy',
    labelText: 'labelText'
  };

  export type QRIssuanceScalarFieldEnum = (typeof QRIssuanceScalarFieldEnum)[keyof typeof QRIssuanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QrStatus'
   */
  export type EnumQrStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QrStatus'>
    


  /**
   * Reference to a field of type 'QrStatus[]'
   */
  export type ListEnumQrStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QrStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    code?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    users?: AgencyUserListRelationFilter
    qrTokens?: QRIssuanceListRelationFilter
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    users?: AgencyUserOrderByRelationAggregateInput
    qrTokens?: QRIssuanceOrderByRelationAggregateInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    name?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    users?: AgencyUserListRelationFilter
    qrTokens?: QRIssuanceListRelationFilter
  }, "id" | "code">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    code?: StringWithAggregatesFilter<"Agency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
  }

  export type AgencyUserWhereInput = {
    AND?: AgencyUserWhereInput | AgencyUserWhereInput[]
    OR?: AgencyUserWhereInput[]
    NOT?: AgencyUserWhereInput | AgencyUserWhereInput[]
    id?: StringFilter<"AgencyUser"> | string
    agencyId?: StringFilter<"AgencyUser"> | string
    name?: StringFilter<"AgencyUser"> | string
    email?: StringFilter<"AgencyUser"> | string
    passwordHash?: StringFilter<"AgencyUser"> | string
    role?: EnumRoleFilter<"AgencyUser"> | $Enums.Role
    isActive?: BoolFilter<"AgencyUser"> | boolean
    createdAt?: DateTimeFilter<"AgencyUser"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
  }

  export type AgencyUserOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
  }

  export type AgencyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AgencyUserWhereInput | AgencyUserWhereInput[]
    OR?: AgencyUserWhereInput[]
    NOT?: AgencyUserWhereInput | AgencyUserWhereInput[]
    agencyId?: StringFilter<"AgencyUser"> | string
    name?: StringFilter<"AgencyUser"> | string
    passwordHash?: StringFilter<"AgencyUser"> | string
    role?: EnumRoleFilter<"AgencyUser"> | $Enums.Role
    isActive?: BoolFilter<"AgencyUser"> | boolean
    createdAt?: DateTimeFilter<"AgencyUser"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
  }, "id" | "email">

  export type AgencyUserOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: AgencyUserCountOrderByAggregateInput
    _max?: AgencyUserMaxOrderByAggregateInput
    _min?: AgencyUserMinOrderByAggregateInput
  }

  export type AgencyUserScalarWhereWithAggregatesInput = {
    AND?: AgencyUserScalarWhereWithAggregatesInput | AgencyUserScalarWhereWithAggregatesInput[]
    OR?: AgencyUserScalarWhereWithAggregatesInput[]
    NOT?: AgencyUserScalarWhereWithAggregatesInput | AgencyUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgencyUser"> | string
    agencyId?: StringWithAggregatesFilter<"AgencyUser"> | string
    name?: StringWithAggregatesFilter<"AgencyUser"> | string
    email?: StringWithAggregatesFilter<"AgencyUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AgencyUser"> | string
    role?: EnumRoleWithAggregatesFilter<"AgencyUser"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"AgencyUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AgencyUser"> | Date | string
  }

  export type QRIssuanceWhereInput = {
    AND?: QRIssuanceWhereInput | QRIssuanceWhereInput[]
    OR?: QRIssuanceWhereInput[]
    NOT?: QRIssuanceWhereInput | QRIssuanceWhereInput[]
    id?: StringFilter<"QRIssuance"> | string
    agencyId?: StringFilter<"QRIssuance"> | string
    token?: StringFilter<"QRIssuance"> | string
    status?: EnumQrStatusFilter<"QRIssuance"> | $Enums.QrStatus
    issuedAt?: DateTimeFilter<"QRIssuance"> | Date | string
    createdBy?: StringNullableFilter<"QRIssuance"> | string | null
    labelText?: StringNullableFilter<"QRIssuance"> | string | null
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
  }

  export type QRIssuanceOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    labelText?: SortOrderInput | SortOrder
    agency?: AgencyOrderByWithRelationInput
  }

  export type QRIssuanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: QRIssuanceWhereInput | QRIssuanceWhereInput[]
    OR?: QRIssuanceWhereInput[]
    NOT?: QRIssuanceWhereInput | QRIssuanceWhereInput[]
    agencyId?: StringFilter<"QRIssuance"> | string
    status?: EnumQrStatusFilter<"QRIssuance"> | $Enums.QrStatus
    issuedAt?: DateTimeFilter<"QRIssuance"> | Date | string
    createdBy?: StringNullableFilter<"QRIssuance"> | string | null
    labelText?: StringNullableFilter<"QRIssuance"> | string | null
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
  }, "id" | "token">

  export type QRIssuanceOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    labelText?: SortOrderInput | SortOrder
    _count?: QRIssuanceCountOrderByAggregateInput
    _max?: QRIssuanceMaxOrderByAggregateInput
    _min?: QRIssuanceMinOrderByAggregateInput
  }

  export type QRIssuanceScalarWhereWithAggregatesInput = {
    AND?: QRIssuanceScalarWhereWithAggregatesInput | QRIssuanceScalarWhereWithAggregatesInput[]
    OR?: QRIssuanceScalarWhereWithAggregatesInput[]
    NOT?: QRIssuanceScalarWhereWithAggregatesInput | QRIssuanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QRIssuance"> | string
    agencyId?: StringWithAggregatesFilter<"QRIssuance"> | string
    token?: StringWithAggregatesFilter<"QRIssuance"> | string
    status?: EnumQrStatusWithAggregatesFilter<"QRIssuance"> | $Enums.QrStatus
    issuedAt?: DateTimeWithAggregatesFilter<"QRIssuance"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"QRIssuance"> | string | null
    labelText?: StringNullableWithAggregatesFilter<"QRIssuance"> | string | null
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    users?: AgencyUserCreateNestedManyWithoutAgencyInput
    qrTokens?: QRIssuanceCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    users?: AgencyUserUncheckedCreateNestedManyWithoutAgencyInput
    qrTokens?: QRIssuanceUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: AgencyUserUpdateManyWithoutAgencyNestedInput
    qrTokens?: QRIssuanceUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: AgencyUserUncheckedUpdateManyWithoutAgencyNestedInput
    qrTokens?: QRIssuanceUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    agency: AgencyCreateNestedOneWithoutUsersInput
  }

  export type AgencyUserUncheckedCreateInput = {
    id?: string
    agencyId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AgencyUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type AgencyUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUserCreateManyInput = {
    id?: string
    agencyId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AgencyUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRIssuanceCreateInput = {
    id?: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
    agency: AgencyCreateNestedOneWithoutQrTokensInput
  }

  export type QRIssuanceUncheckedCreateInput = {
    id?: string
    agencyId: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
  }

  export type QRIssuanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
    agency?: AgencyUpdateOneRequiredWithoutQrTokensNestedInput
  }

  export type QRIssuanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRIssuanceCreateManyInput = {
    id?: string
    agencyId: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
  }

  export type QRIssuanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRIssuanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgencyUserListRelationFilter = {
    every?: AgencyUserWhereInput
    some?: AgencyUserWhereInput
    none?: AgencyUserWhereInput
  }

  export type QRIssuanceListRelationFilter = {
    every?: QRIssuanceWhereInput
    some?: QRIssuanceWhereInput
    none?: QRIssuanceWhereInput
  }

  export type AgencyUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QRIssuanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AgencyScalarRelationFilter = {
    is?: AgencyWhereInput
    isNot?: AgencyWhereInput
  }

  export type AgencyUserCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyUserMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyUserMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumQrStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QrStatus | EnumQrStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQrStatusFilter<$PrismaModel> | $Enums.QrStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QRIssuanceCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    createdBy?: SortOrder
    labelText?: SortOrder
  }

  export type QRIssuanceMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    createdBy?: SortOrder
    labelText?: SortOrder
  }

  export type QRIssuanceMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    createdBy?: SortOrder
    labelText?: SortOrder
  }

  export type EnumQrStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QrStatus | EnumQrStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQrStatusWithAggregatesFilter<$PrismaModel> | $Enums.QrStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQrStatusFilter<$PrismaModel>
    _max?: NestedEnumQrStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AgencyUserCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput> | AgencyUserCreateWithoutAgencyInput[] | AgencyUserUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyUserCreateOrConnectWithoutAgencyInput | AgencyUserCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyUserCreateManyAgencyInputEnvelope
    connect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
  }

  export type QRIssuanceCreateNestedManyWithoutAgencyInput = {
    create?: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput> | QRIssuanceCreateWithoutAgencyInput[] | QRIssuanceUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: QRIssuanceCreateOrConnectWithoutAgencyInput | QRIssuanceCreateOrConnectWithoutAgencyInput[]
    createMany?: QRIssuanceCreateManyAgencyInputEnvelope
    connect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
  }

  export type AgencyUserUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput> | AgencyUserCreateWithoutAgencyInput[] | AgencyUserUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyUserCreateOrConnectWithoutAgencyInput | AgencyUserCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyUserCreateManyAgencyInputEnvelope
    connect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
  }

  export type QRIssuanceUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput> | QRIssuanceCreateWithoutAgencyInput[] | QRIssuanceUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: QRIssuanceCreateOrConnectWithoutAgencyInput | QRIssuanceCreateOrConnectWithoutAgencyInput[]
    createMany?: QRIssuanceCreateManyAgencyInputEnvelope
    connect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AgencyUserUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput> | AgencyUserCreateWithoutAgencyInput[] | AgencyUserUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyUserCreateOrConnectWithoutAgencyInput | AgencyUserCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyUserUpsertWithWhereUniqueWithoutAgencyInput | AgencyUserUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyUserCreateManyAgencyInputEnvelope
    set?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    disconnect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    delete?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    connect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    update?: AgencyUserUpdateWithWhereUniqueWithoutAgencyInput | AgencyUserUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyUserUpdateManyWithWhereWithoutAgencyInput | AgencyUserUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyUserScalarWhereInput | AgencyUserScalarWhereInput[]
  }

  export type QRIssuanceUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput> | QRIssuanceCreateWithoutAgencyInput[] | QRIssuanceUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: QRIssuanceCreateOrConnectWithoutAgencyInput | QRIssuanceCreateOrConnectWithoutAgencyInput[]
    upsert?: QRIssuanceUpsertWithWhereUniqueWithoutAgencyInput | QRIssuanceUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: QRIssuanceCreateManyAgencyInputEnvelope
    set?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    disconnect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    delete?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    connect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    update?: QRIssuanceUpdateWithWhereUniqueWithoutAgencyInput | QRIssuanceUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: QRIssuanceUpdateManyWithWhereWithoutAgencyInput | QRIssuanceUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: QRIssuanceScalarWhereInput | QRIssuanceScalarWhereInput[]
  }

  export type AgencyUserUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput> | AgencyUserCreateWithoutAgencyInput[] | AgencyUserUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyUserCreateOrConnectWithoutAgencyInput | AgencyUserCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyUserUpsertWithWhereUniqueWithoutAgencyInput | AgencyUserUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyUserCreateManyAgencyInputEnvelope
    set?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    disconnect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    delete?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    connect?: AgencyUserWhereUniqueInput | AgencyUserWhereUniqueInput[]
    update?: AgencyUserUpdateWithWhereUniqueWithoutAgencyInput | AgencyUserUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyUserUpdateManyWithWhereWithoutAgencyInput | AgencyUserUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyUserScalarWhereInput | AgencyUserScalarWhereInput[]
  }

  export type QRIssuanceUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput> | QRIssuanceCreateWithoutAgencyInput[] | QRIssuanceUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: QRIssuanceCreateOrConnectWithoutAgencyInput | QRIssuanceCreateOrConnectWithoutAgencyInput[]
    upsert?: QRIssuanceUpsertWithWhereUniqueWithoutAgencyInput | QRIssuanceUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: QRIssuanceCreateManyAgencyInputEnvelope
    set?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    disconnect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    delete?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    connect?: QRIssuanceWhereUniqueInput | QRIssuanceWhereUniqueInput[]
    update?: QRIssuanceUpdateWithWhereUniqueWithoutAgencyInput | QRIssuanceUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: QRIssuanceUpdateManyWithWhereWithoutAgencyInput | QRIssuanceUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: QRIssuanceScalarWhereInput | QRIssuanceScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutUsersInput = {
    create?: XOR<AgencyCreateWithoutUsersInput, AgencyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUsersInput
    connect?: AgencyWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AgencyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AgencyCreateWithoutUsersInput, AgencyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUsersInput
    upsert?: AgencyUpsertWithoutUsersInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutUsersInput, AgencyUpdateWithoutUsersInput>, AgencyUncheckedUpdateWithoutUsersInput>
  }

  export type AgencyCreateNestedOneWithoutQrTokensInput = {
    create?: XOR<AgencyCreateWithoutQrTokensInput, AgencyUncheckedCreateWithoutQrTokensInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutQrTokensInput
    connect?: AgencyWhereUniqueInput
  }

  export type EnumQrStatusFieldUpdateOperationsInput = {
    set?: $Enums.QrStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AgencyUpdateOneRequiredWithoutQrTokensNestedInput = {
    create?: XOR<AgencyCreateWithoutQrTokensInput, AgencyUncheckedCreateWithoutQrTokensInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutQrTokensInput
    upsert?: AgencyUpsertWithoutQrTokensInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutQrTokensInput, AgencyUpdateWithoutQrTokensInput>, AgencyUncheckedUpdateWithoutQrTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQrStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QrStatus | EnumQrStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQrStatusFilter<$PrismaModel> | $Enums.QrStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumQrStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QrStatus | EnumQrStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrStatus[] | ListEnumQrStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQrStatusWithAggregatesFilter<$PrismaModel> | $Enums.QrStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQrStatusFilter<$PrismaModel>
    _max?: NestedEnumQrStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AgencyUserCreateWithoutAgencyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AgencyUserUncheckedCreateWithoutAgencyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type AgencyUserCreateOrConnectWithoutAgencyInput = {
    where: AgencyUserWhereUniqueInput
    create: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyUserCreateManyAgencyInputEnvelope = {
    data: AgencyUserCreateManyAgencyInput | AgencyUserCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type QRIssuanceCreateWithoutAgencyInput = {
    id?: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
  }

  export type QRIssuanceUncheckedCreateWithoutAgencyInput = {
    id?: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
  }

  export type QRIssuanceCreateOrConnectWithoutAgencyInput = {
    where: QRIssuanceWhereUniqueInput
    create: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput>
  }

  export type QRIssuanceCreateManyAgencyInputEnvelope = {
    data: QRIssuanceCreateManyAgencyInput | QRIssuanceCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUserUpsertWithWhereUniqueWithoutAgencyInput = {
    where: AgencyUserWhereUniqueInput
    update: XOR<AgencyUserUpdateWithoutAgencyInput, AgencyUserUncheckedUpdateWithoutAgencyInput>
    create: XOR<AgencyUserCreateWithoutAgencyInput, AgencyUserUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyUserUpdateWithWhereUniqueWithoutAgencyInput = {
    where: AgencyUserWhereUniqueInput
    data: XOR<AgencyUserUpdateWithoutAgencyInput, AgencyUserUncheckedUpdateWithoutAgencyInput>
  }

  export type AgencyUserUpdateManyWithWhereWithoutAgencyInput = {
    where: AgencyUserScalarWhereInput
    data: XOR<AgencyUserUpdateManyMutationInput, AgencyUserUncheckedUpdateManyWithoutAgencyInput>
  }

  export type AgencyUserScalarWhereInput = {
    AND?: AgencyUserScalarWhereInput | AgencyUserScalarWhereInput[]
    OR?: AgencyUserScalarWhereInput[]
    NOT?: AgencyUserScalarWhereInput | AgencyUserScalarWhereInput[]
    id?: StringFilter<"AgencyUser"> | string
    agencyId?: StringFilter<"AgencyUser"> | string
    name?: StringFilter<"AgencyUser"> | string
    email?: StringFilter<"AgencyUser"> | string
    passwordHash?: StringFilter<"AgencyUser"> | string
    role?: EnumRoleFilter<"AgencyUser"> | $Enums.Role
    isActive?: BoolFilter<"AgencyUser"> | boolean
    createdAt?: DateTimeFilter<"AgencyUser"> | Date | string
  }

  export type QRIssuanceUpsertWithWhereUniqueWithoutAgencyInput = {
    where: QRIssuanceWhereUniqueInput
    update: XOR<QRIssuanceUpdateWithoutAgencyInput, QRIssuanceUncheckedUpdateWithoutAgencyInput>
    create: XOR<QRIssuanceCreateWithoutAgencyInput, QRIssuanceUncheckedCreateWithoutAgencyInput>
  }

  export type QRIssuanceUpdateWithWhereUniqueWithoutAgencyInput = {
    where: QRIssuanceWhereUniqueInput
    data: XOR<QRIssuanceUpdateWithoutAgencyInput, QRIssuanceUncheckedUpdateWithoutAgencyInput>
  }

  export type QRIssuanceUpdateManyWithWhereWithoutAgencyInput = {
    where: QRIssuanceScalarWhereInput
    data: XOR<QRIssuanceUpdateManyMutationInput, QRIssuanceUncheckedUpdateManyWithoutAgencyInput>
  }

  export type QRIssuanceScalarWhereInput = {
    AND?: QRIssuanceScalarWhereInput | QRIssuanceScalarWhereInput[]
    OR?: QRIssuanceScalarWhereInput[]
    NOT?: QRIssuanceScalarWhereInput | QRIssuanceScalarWhereInput[]
    id?: StringFilter<"QRIssuance"> | string
    agencyId?: StringFilter<"QRIssuance"> | string
    token?: StringFilter<"QRIssuance"> | string
    status?: EnumQrStatusFilter<"QRIssuance"> | $Enums.QrStatus
    issuedAt?: DateTimeFilter<"QRIssuance"> | Date | string
    createdBy?: StringNullableFilter<"QRIssuance"> | string | null
    labelText?: StringNullableFilter<"QRIssuance"> | string | null
  }

  export type AgencyCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    qrTokens?: QRIssuanceCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    qrTokens?: QRIssuanceUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutUsersInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutUsersInput, AgencyUncheckedCreateWithoutUsersInput>
  }

  export type AgencyUpsertWithoutUsersInput = {
    update: XOR<AgencyUpdateWithoutUsersInput, AgencyUncheckedUpdateWithoutUsersInput>
    create: XOR<AgencyCreateWithoutUsersInput, AgencyUncheckedCreateWithoutUsersInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutUsersInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutUsersInput, AgencyUncheckedUpdateWithoutUsersInput>
  }

  export type AgencyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrTokens?: QRIssuanceUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrTokens?: QRIssuanceUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyCreateWithoutQrTokensInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    users?: AgencyUserCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutQrTokensInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    users?: AgencyUserUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutQrTokensInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutQrTokensInput, AgencyUncheckedCreateWithoutQrTokensInput>
  }

  export type AgencyUpsertWithoutQrTokensInput = {
    update: XOR<AgencyUpdateWithoutQrTokensInput, AgencyUncheckedUpdateWithoutQrTokensInput>
    create: XOR<AgencyCreateWithoutQrTokensInput, AgencyUncheckedCreateWithoutQrTokensInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutQrTokensInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutQrTokensInput, AgencyUncheckedUpdateWithoutQrTokensInput>
  }

  export type AgencyUpdateWithoutQrTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: AgencyUserUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutQrTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: AgencyUserUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUserCreateManyAgencyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type QRIssuanceCreateManyAgencyInput = {
    id?: string
    token: string
    status?: $Enums.QrStatus
    issuedAt?: Date | string
    createdBy?: string | null
    labelText?: string | null
  }

  export type AgencyUserUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUserUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUserUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRIssuanceUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRIssuanceUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRIssuanceUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumQrStatusFieldUpdateOperationsInput | $Enums.QrStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    labelText?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}