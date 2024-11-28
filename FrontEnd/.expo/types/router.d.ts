/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Cadastro` | `/Cadastro`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Carrinho` | `/Carrinho`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Cadastro` | `/Cadastro`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Carrinho` | `/Carrinho`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Cadastro${`?${string}` | `#${string}` | ''}` | `/Cadastro${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Carrinho${`?${string}` | `#${string}` | ''}` | `/Carrinho${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Login${`?${string}` | `#${string}` | ''}` | `/Login${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Cadastro` | `/Cadastro`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Carrinho` | `/Carrinho`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
