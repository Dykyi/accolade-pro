/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** A `Lift` is a chairlift, gondola, tram, funicular, pulley, rope tow, or other means of ascending a mountain. */
export type Lift = {
  __typename?: 'Lift';
  /** The number of people that a `Lift` can hold */
  capacity: Scalars['Int']['output'];
  /** The number of feet in elevation that a `Lift` ascends */
  elevationGain: Scalars['Int']['output'];
  /** The unique identifier for a `Lift` (id: "panorama") */
  id: Scalars['ID']['output'];
  /** The name of a `Lift` */
  name: Scalars['String']['output'];
  /** A boolean describing whether a `Lift` is open for night skiing */
  night: Scalars['Boolean']['output'];
  /** The current status for a `Lift`: `OPEN`, `CLOSED`, `HOLD` */
  status?: Maybe<LiftStatus>;
  /** A list of trails that this `Lift` serves */
  trailAccess: Array<Trail>;
};

/** An enum describing the options for `LiftStatus`: `OPEN`, `CLOSED`, `HOLD` */
export enum LiftStatus {
  Closed = 'CLOSED',
  Hold = 'HOLD',
  Open = 'OPEN'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Sets a `Lift` status by sending `id` and `status` */
  setLiftStatus: Lift;
  /** Sets a `Trail` status by sending `id` and `status` */
  setTrailStatus: Trail;
};


export type MutationSetLiftStatusArgs = {
  id: Scalars['ID']['input'];
  status: LiftStatus;
};


export type MutationSetTrailStatusArgs = {
  id: Scalars['ID']['input'];
  status: TrailStatus;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a `Lift` by `id` (id: "panorama") */
  Lift: Lift;
  /** Returns a `Trail` by `id` (id: "old-witch") */
  Trail: Trail;
  /** A list of all `Lift` objects */
  allLifts: Array<Lift>;
  /** A list of all `Trail` objects */
  allTrails: Array<Trail>;
  /** Returns an `Int` of `Lift` objects with optional `LiftStatus` filter */
  liftCount: Scalars['Int']['output'];
  /** Returns a list of `SearchResult` objects based on `term` or `status` */
  search: Array<SearchResult>;
  /** Returns an `Int` of `Trail` objects with optional `TrailStatus` filter */
  trailCount: Scalars['Int']['output'];
};


export type QueryLiftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTrailArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAllLiftsArgs = {
  status?: InputMaybe<LiftStatus>;
};


export type QueryAllTrailsArgs = {
  status?: InputMaybe<TrailStatus>;
};


export type QueryLiftCountArgs = {
  status?: InputMaybe<LiftStatus>;
};


export type QuerySearchArgs = {
  status?: InputMaybe<LiftStatus>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrailCountArgs = {
  status?: InputMaybe<TrailStatus>;
};

/** This union type returns one of two types: a `Lift` or a `Trail`. When we search for a letter, we'll return a list of either `Lift` or `Trail` objects. */
export type SearchResult = Lift | Trail;

export type Subscription = {
  __typename?: 'Subscription';
  /** Listens for changes in lift status */
  liftStatusChange?: Maybe<Lift>;
  /** Listens for changes in trail status */
  trailStatusChange?: Maybe<Trail>;
};

/** A `Trail` is a run at a ski resort */
export type Trail = {
  __typename?: 'Trail';
  /** A list of Lifts that provide access to this `Trail` */
  accessedByLifts: Array<Lift>;
  /** The difficulty rating for a `Trail` */
  difficulty: Scalars['String']['output'];
  /** A boolean describing whether or not a `Trail` is groomed */
  groomed: Scalars['Boolean']['output'];
  /** A unique identifier for a `Trail` (id: 'hemmed-slacks') */
  id: Scalars['ID']['output'];
  /** The name of a `Trail` */
  name: Scalars['String']['output'];
  /** A boolean describing whether or not a `Trail` is open for night skiing */
  night: Scalars['Boolean']['output'];
  /** The current status for a `Trail`: OPEN, CLOSED */
  status?: Maybe<TrailStatus>;
  /** A boolean describing whether or not a `Trail` has trees */
  trees: Scalars['Boolean']['output'];
};

/** An enum describing the options for `TrailStatus`: `OPEN`, `CLOSED` */
export enum TrailStatus {
  Closed = 'CLOSED',
  Open = 'OPEN'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  SearchResult: ( Lift ) | ( Trail );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CacheControlScope: CacheControlScope;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lift: ResolverTypeWrapper<Lift>;
  LiftStatus: LiftStatus;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SearchResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResult']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Trail: ResolverTypeWrapper<Trail>;
  TrailStatus: TrailStatus;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Lift: Lift;
  Mutation: {};
  Query: {};
  SearchResult: ResolversUnionTypes<ResolversParentTypes>['SearchResult'];
  String: Scalars['String']['output'];
  Subscription: {};
  Trail: Trail;
  Upload: Scalars['Upload']['output'];
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']['input']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LiftResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lift'] = ResolversParentTypes['Lift']> = {
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  elevationGain?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  night?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['LiftStatus']>, ParentType, ContextType>;
  trailAccess?: Resolver<Array<ResolversTypes['Trail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  setLiftStatus?: Resolver<ResolversTypes['Lift'], ParentType, ContextType, RequireFields<MutationSetLiftStatusArgs, 'id' | 'status'>>;
  setTrailStatus?: Resolver<ResolversTypes['Trail'], ParentType, ContextType, RequireFields<MutationSetTrailStatusArgs, 'id' | 'status'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Lift?: Resolver<ResolversTypes['Lift'], ParentType, ContextType, RequireFields<QueryLiftArgs, 'id'>>;
  Trail?: Resolver<ResolversTypes['Trail'], ParentType, ContextType, RequireFields<QueryTrailArgs, 'id'>>;
  allLifts?: Resolver<Array<ResolversTypes['Lift']>, ParentType, ContextType, Partial<QueryAllLiftsArgs>>;
  allTrails?: Resolver<Array<ResolversTypes['Trail']>, ParentType, ContextType, Partial<QueryAllTrailsArgs>>;
  liftCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryLiftCountArgs>>;
  search?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType, Partial<QuerySearchArgs>>;
  trailCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryTrailCountArgs>>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'Lift' | 'Trail', ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  liftStatusChange?: SubscriptionResolver<Maybe<ResolversTypes['Lift']>, "liftStatusChange", ParentType, ContextType>;
  trailStatusChange?: SubscriptionResolver<Maybe<ResolversTypes['Trail']>, "trailStatusChange", ParentType, ContextType>;
};

export type TrailResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trail'] = ResolversParentTypes['Trail']> = {
  accessedByLifts?: Resolver<Array<ResolversTypes['Lift']>, ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groomed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  night?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TrailStatus']>, ParentType, ContextType>;
  trees?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Lift?: LiftResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Trail?: TrailResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
