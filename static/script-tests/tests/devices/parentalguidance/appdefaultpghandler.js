/**
 * @preserve Copyright (c) 2014 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

(function() {
    this.AppDefaultPgHandlerTest = AsyncTestCase("App Default PG Handler");

    this.AppDefaultPgHandlerTest.prototype.setUp = function() {
    };

    this.AppDefaultPgHandlerTest.prototype.tearDown = function() {
    };

    this.AppDefaultPgHandlerTest.prototype.testThatRegisterAppPgHandlerAddsCorrectObjectToDevice = function(queue) {
        expectAsserts(4);

        queuedRequire(queue, ["antie/devices/parentalguidance/appdefaultpghandler"], function(AppDefaultPgHandler) {

            var device = this.getCurrentApplication().getDevice();

            var appHandler = {foo: "bar"};

            device.registerAppPgHandler(appHandler);

            assertEquals(appHandler, device.parentalGuidanceHelper._appHandler);
        });
    };

})();
