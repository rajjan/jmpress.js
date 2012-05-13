webpackJsonp(7,{38:function(a,b,c){a.exports='<h1>Animation</h1><p>Apply custom animations to steps. Handles the attribute data-jmpress (the  attribute name depends on a config option). Take a look at this  <a href="http://shama.github.com/jmpress.js/examples/animation/">animation example</a> for more information.</p><h3><code>data-jmpress</code></h3><p>Apply a custom animation.</p><p>The following strings are supported:</p><ul><li><code>(name)</code></li><li><code>(name) after (time)</code> = <code>(name) after (time) prev</code></li><li><code>(name) after (time) step</code></li><li><code>(name) after (time) (selector)</code></li><li><code>(name) after step</code></li><li><code>(name) after (selector)</code></li></ul><p><code>(name)</code> is a animation name. It is the basis for the classes that will be added the the element:</p><table><tbody><tr><td><code>will-(name)</code></td><td>Class ever set.</td></tr><tr><td><code>do-(name)</code></td><td>Class is only set while the animation is running.</td></tr><tr><td><code>has-(name)</code></td><td>Class is only set after the animation was ran.</td></tr></tbody></table><p><code>(time)</code> is <code>**m</code>, <code>**s</code> or <code>**ms</code> (minutes, seconds, milli seconds) in example: <code>300ms</code> or <code>1.4s</code>.</p><p><code>(selector)</code> is a jQuery Selector after which the substep follows.</p><p>If you set a <code>(time)</code> the substep automatically advance. If you do not set a <code>(time)</code> substep advance  after the &quot;next&quot; key is pressed.</p><p><code>prev</code> means the previous substep in DOM. <code>step</code> means the slide.</p><p>If you have cool animations created, you can contribute them to <code>jmpress.js/src/css/animations/</code>.</p>'}})