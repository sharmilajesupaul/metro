/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {GeneratedOffset} from './types.flow';
import type {Number0, Number1} from 'ob1';

const {add, add0, add1, neg} = require('ob1');

function shiftPositionByOffset<
  T: {
    +line: ?Number1,
    +column: ?Number0,
    ...
  },
>(pos: T, offset: GeneratedOffset): T {
  return {
    ...pos,
    line: pos.line != null ? add(pos.line, offset.lines) : null,
    column: pos.column != null ? add(pos.column, offset.columns) : null,
  };
}

function subtractOffsetFromPosition<
  T: {
    +line: ?Number1,
    +column: ?Number0,
    ...
  },
>(pos: T, offset: GeneratedOffset): T {
  if (pos.line === add1(offset.lines)) {
    return shiftPositionByOffset(pos, {
      lines: neg(offset.lines),
      columns: neg(offset.columns),
    });
  }
  return shiftPositionByOffset(pos, {
    lines: neg(offset.lines),
    columns: add0(0),
  });
}

module.exports = {shiftPositionByOffset, subtractOffsetFromPosition};
