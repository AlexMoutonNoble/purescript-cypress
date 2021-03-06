exports.andFn = function andFn(a, cy) { return cy.and(a);  }
exports.asFn = function asFn(a, cy) { return cy.as(a);  }
exports.blurFn = function blurFn(a, cy) { return cy.blur(a);  }
exports.checkFn = function checkFn(a, cy) { return cy.check(a);  }
exports.childrenFn = function childrenFn(a, cy) { return cy.children(a);  }
exports.clearFn = function clearFn(cy) { return cy.clear();  }
exports.clearCookieFn = function clearCookieFn(a, cy) { return cy.clearCookie(a);  }
exports.clearCookiesFn = function clearCookiesFn(a, cy) { return cy.clearCookies(a);  }
exports.clearLocalStorageFn = function clearLocalStorageFn(a, cy) { return cy.clearLocalStorage(a);  }
exports.clickFn = function clickFn(cy) { return cy.click();  }
exports.clockFn = function clockFn(cy) { return cy.clock();  }
exports.closestFn = function closestFn(a, cy) { return cy.closest(a);  }
exports.containsFn = function containsFn(a, cy) { return cy.contains(a);  }
exports.dblclickFn = function dblclickFn(cy) { return cy.dblclick();  }
exports.debugFn = function debugFn(a, cy) { return cy.debug(a);  }
exports.documentFn = function documentFn(cy) { return cy.document();  }
// exports.eachFn = function eachFn(a, cy) { return cy.each(a);  }
exports.endFn = function endFn(cy) { return cy.end();  }
exports.eqFn = function eqFn(a, cy) { return cy.eq(a);  }
exports.execFn = function execFn(a, cy) { return cy.exec(a);  }
exports.filterFn = function filterFn(a, cy) { return cy.filter(a);  }
exports.findFn = function findFn(a, cy) { return cy.find(a);  }
exports.firstFn = function firstFn(a) { return a.first();  }
exports.fixtureFn = function fixtureFn(a, cy) { return cy.fixture(a);  }
exports.focusFn = function focusFn(a, cy) { return cy.focus(a);  }
exports.focusedFn = function focusedFn(a, cy) { return cy.focused(a);  }
exports.getFn = function getFn(path, cy) { return cy.get(path); }
exports.getCookieFn = function getCookieFn(a, cy) { return cy.getCookie(a);  }
exports.getCookiesFn = function getCookiesFn(cy) { return cy.getCookies();  }
exports.goFn = function goFn(a, cy) { return cy.go(a);  }
exports.hashFn = function hashFn(cy) { return cy.hash();  }
exports.hoverFn = function hoverFn(a, cy) { return cy.hover(a);  }
// exports.invokeFn = function invokeFn(a, cy) { return cy.invoke(a);  }
// exports.itsFn = function itsFn(a, cy) { return cy.its(a);  }
exports.lastFn = function lastFn(a, cy) { return cy.last(a);  }
exports.locationFn = function locationFn(a, cy) { return cy.location(a);  }
exports.logFn = function logFn(a, cy) { return cy.log(a);  }
exports.nextFn = function nextFn(cy) { return cy.next();  }
exports.nextAllFn = function nextAllFn(a, cy) { return cy.nextAll(a);  }
exports.nextUntilFn = function nextUntilFn(a, cy) { return cy.nextUntil(a);  }
exports.notFn = function notFn(a, cy) { return cy.not(a);  }
exports.parentFn = function parentFn(a, cy) { return cy.parent(a);  }
exports.parentsFn = function parentsFn(a, cy) { return cy.parents(a);  }
exports.parentsUntilFn = function parentsUntilFn(a, cy) { return cy.parentsUntil(a);  }
exports.pauseFn = function pauseFn(a, cy) { return cy.pause(a);  }
exports.prevFn = function prevFn(a, cy) { return cy.prev(a);  }
exports.prevAllFn = function prevAllFn(a, cy) { return cy.prevAll(a);  }
exports.prevUntilFn = function prevUntilFn(a, cy) { return cy.prevUntil(a);  }
exports.readFileFn = function readFileFn(a, cy) { return cy.readFile(a);  }
exports.reloadFn = function reloadFn(cy) { return cy.reload();  }
// exports.requestFn = function requestFn(a, cy) { return cy.request(a);  }
exports.rightclickFn = function rightclickFn(cy) { return cy.rightclick();  }
// exports.rootFn = function rootFn(cy) { return cy.root();  }
// exports.routeFn = function routeFn(a, cy) { return cy.route(a);  }
exports.screenshotFn = function screenshotFn(cy) { return cy.screenshot();  }
exports.scrollIntoViewFn = function scrollIntoViewFn(a, cy) { return cy.scrollIntoView(a);  }
// exports.scrollToFn = function scrollToFn(a, cy) { return cy.scrollTo(a);  }
exports.selectFn = function selectFn(path, cy) { return cy.select(path); }
// exports.serverFn = function serverFn(a, cy) { return cy.server(a);  }
exports.setCookieFn = function setCookieFn(a, b, cy) { return cy.setCookie(a, b);  }
exports.shouldFn = function shouldFn(a, b, c) { return c.should(a, b);  }
exports.siblingsFn = function siblingsFn(a, cy) { return cy.siblings(a);  }
// exports.spreadFn = function spreadFn(a, cy) { return cy.spread(a);  }
// exports.spyFn = function spyFn(a, cy) { return cy.spy(a);  }
// exports.stubFn = function stubFn(a, cy) { return cy.stub(a);  }
exports.submitFn = function submitFn(a, cy) { return cy.submit(a);  }
// exports.taskFn = function taskFn(a, cy) { return cy.task(a);  }
// exports.thenFn = function thenFn(f, a, cy) { return a.then(f);  }
exports.tickFn = function tickFn(a, cy) { return cy.tick(a);  }
exports.titleFn = function titleFn(cy) { return cy.title();  }
exports.triggerFn = function triggerFn(a, cy) { return cy.trigger(a);  }
exports.typeFn = function typeFn(a, cy) { return cy.type(a);  }
exports.uncheckFn = function uncheckFn(a, cy) { return cy.uncheck(a);  }
exports.urlFn = function urlFn(cy) { return cy.url();  }
exports.viewportFn = function viewportFn(a, b, cy) { return cy.viewport(a, b);  }
exports.visitFn = function visitFn(url, cy) { return cy.visit(url); }
exports.waitFn = function waitFn(a, cy) { return cy.wait(a);  }
exports.windowFn = function windowFn(cy) { return cy.window();  }
exports.withinFn = function withinFn(a, cy) { return cy.within(a);  }
exports.wrapFn = function wrapFn(a, cy) { return cy.wrap(a);  }
// exports.writeFileFn = function writeFileFn(a, cy) { return cy.writeFile(a);  }
