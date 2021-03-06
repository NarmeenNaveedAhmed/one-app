/*
 * Copyright 2019 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import uuidV4 from 'uuid/v4';

export default function ensureCorrelationId(req, res, next) {
  if (!req.headers['correlation-id']) {
    req.headers['correlation-id'] = req.headers.correlation_id
      || req.headers.unique_id
      || uuidV4();
  }
  // TODO: expose the id to the client?
  // res.header('Correlation-Id', req.headers['correlation-id']);
  next();
}
