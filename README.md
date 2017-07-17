# LC-Number-Plugin
液晶数字称重计插件
<h3>HTML结构:</h3>
<p>一个液晶数字的html代码结构如下</p>

<pre class="brush:html">
 &lt;div class="zero"&gt;
    &lt;span class="d1"&gt;&lt;/span&gt;
    &lt;span class="d2"&gt;&lt;/span&gt;
    &lt;span class="d3"&gt;&lt;/span&gt;
    &lt;span class="d4"&gt;&lt;/span&gt;
    &lt;span class="d5"&gt;&lt;/span&gt;
    &lt;span class="d6"&gt;&lt;/span&gt;
    &lt;span class="d7"&gt;&lt;/span&gt;
&lt;/div&gt;                               
</pre>
<p><span class="m">.digits</span>元素包含6个带有多个span的div。每个div代表一个数字，如上所示，上边代表的是0，0用class <span class="m">zero</span>表示，9则用class <span class="m">nine</span>表示。在div中的每个span代表数字的一条边，如下图所示：</p>
                            <p><img class="lazy" src="http://www.htmleaf.com/load.gif" data-original="http://img.htmleaf.com/1412/the_digits_explained.jpg" alt="jQuery??css3????????-1" width="620" height="300"></p>
<p>CSS样式如下所示，默认设置器透明度<span class="m">opacity:0</span>然后通过设置其父元素的可见性来使他它们可见</p>
<pre class="brush:css">
/* 0 */
#clock .digits div.zero .d1,
#clock .digits div.zero .d3,
#clock .digits div.zero .d4,
#clock .digits div.zero .d5,
#clock .digits div.zero .d6,
#clock .digits div.zero .d7{
    opacity:1;
}                                
</pre>
                            
