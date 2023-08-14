/**
 * @fileoverview Configuração do ambiente de teste do Angular utilizando o Karma.
 * Localiza e executa todos os arquivos de teste com a extensão .spec.ts.
 */

import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * Declaração da função `require`, usada para carregar arquivos de teste.
 * @typedef {{context: Function}} require
 */
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// Inicializa o ambiente de teste do Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

/**
 * Localiza todos os arquivos de teste com a extensão .spec.ts.
 * @type {{keys: Function, <T>(id: string): T}}
 */
const context = require.context('./', true, /\.spec\.ts$/);

context.keys().map(context);
