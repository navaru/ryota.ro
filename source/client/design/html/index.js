import React, { useState } from "react";
import Section from "$components/Section";
import $ from "./style.module.css";

export default () => (
	<b class={$.container}>
		<Section class={$.flex}>
			<b class={$.half}>
				<h1>h1 – heading</h1>
				<h2>h2 – heading</h2>
				<h3>h3 – heading</h3>
				<h4>h4 – heading</h4>
				<h5>h5 – heading</h5>
				<h6>h6 – heading</h6>
			</b>
			<b class={$.half}>
				<b style={{ fontWeight: 900 }}>900 – Black</b>
				<b style={{ fontWeight: 800 }}>800 – Extra-Bold</b>
				<b style={{ fontWeight: 700 }}>700 – Bold</b>
				<b style={{ fontWeight: 600 }}>600 – Semi-Bold</b>
				<b style={{ fontWeight: 500 }}>500 – Medium</b>
				<b style={{ fontWeight: 400 }}>400 – Regular</b>
				<b style={{ fontWeight: 300 }}>300 – Light</b>
				<b style={{ fontWeight: 200 }}>200 – Extra-Light</b>
				<b style={{ fontWeight: 100 }}>100 – Thin</b>
			</b>
		</Section>
		<Section>
			<h1>Never memorize something that you can look up</h1>
			<p>
				Saying 'I notice you're a nerd' is like saying, 'Hey, I notice that
				you'd rather be intelligent than be stupid, that you'd rather be
				thoughtful than be vapid, that you believe that there are things that
				matter more than the arrest record of Lindsay Lohan. Why is that?' In
				fact, it seems to me that most contemporary insults are pretty lame.
				Even 'lame' is kind of lame. Saying 'You're lame' is like saying 'You
				walk with a limp.' Yeah, whatever, so does 50 Cent, and he's done all
				right for himself.
			</p>

			<h2>Creativity is knowing how to hide your sources</h2>
			<p>
				"I don't want to be a man," said Jace. "I want to be an angst-ridden
				teenager who can't confront his own inner demons and takes it out
				verbally on other people instead." "Well," said Luke, "you're doing a
				fantastic job.
			</p>

			<h3>I think God, in creating man, somewhat overestimated his ability</h3>
			<p>
				Fantasy is a necessary ingredient in living, it's a way of looking at
				life through the wrong end of a telescope.
			</p>

			<h4>Time flies like an arrow; fruit flies like a banana</h4>
			<p>
				If the world were merely seductive, that would be easy. If it were
				merely challenging, that would be no problem. But I arise in the morning
				torn between a desire to improve the world and a desire to enjoy the
				world. This makes it hard to plan the day.
			</p>

			<h5>We believe ideas are worth something</h5>
			<p>
				“The Guide says there is an art to flying", said Ford, "or rather a
				knack. The knack lies in learning how to throw yourself at the ground
				and miss.”
			</p>

			<h6>I believe wholeheartedly in their mission</h6>
			<p>
				The fact that we live at the bottom of a deep gravity well, on the
				surface of a gas covered planet going around a nuclear fireball 90
				million miles away and think this to be normal is obviously some
				indication of how skewed our perspective tends to be.
			</p>
			<p>
				<strong>Phasellus ultrices</strong> nulla quis nibh. Quisque a lectus.
				Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
				quam, gravida non, commodo a, sodales sit amet, nisi.
			</p>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Aliquam tincidunt mauris eu risus.</li>
				<li>Vestibulum auctor dapibus neque.</li>
				<li>Nunc dignissim risus id metus.</li>
				<li>Cras ornare tristique elit.</li>
			</ul>
			<hr />
			<p>
				<em>Phasellus ultrices</em> nulla quis nibh. Quisque a lectus. Donec
				consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
				gravida non, commodo a, sodales sit amet, nisi.
			</p>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Aliquam tincidunt mauris eu risus.</li>
				<li>Vestibulum auctor dapibus neque.</li>
			</ol>
			<p>
				<a href="">Pellentesque fermentum dolor.</a> Aliquam quam lectus,
				facilisis auctor, ultrices ut, elementum vulputate, nunc.
				<br />
				Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
				vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
				ullamcorper magna.
			</p>

			<table>
				<tr>
					<th>Table Heading</th>
					<th>Table Heading</th>
				</tr>
				<tr>
					<td>table data</td>
					<td>table data</td>
				</tr>
				<tr>
					<td>table data</td>
					<td>table data</td>
				</tr>
				<tr>
					<td>table data</td>
					<td>table data</td>
				</tr>
				<tr>
					<td>table data</td>
					<td>table data</td>
				</tr>
			</table>
			<p>
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
				ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
				egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
				leo.
			</p>
			<blockquote>
				<p>
					“Ooh - a blockquote! Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut
					a est eget ligula molestie gravida. Curabitur massa. Donec eleifend,
					libero at sagittis mollis, tellus est malesuada tellus, at luctus
					turpis elit sit amet quam. Vivamus pretium ornare est.”
				</p>
			</blockquote>
			<p>
				Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
				vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
				ullamcorper magna.
			</p>
			<address>
				1 Infinite Loop
				<br />
				Cupertino, CA 95014
				<br />
				United States
			</address>
			<p>
				Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
				quam, gravida non, commodo a, sodales sit amet, nisi.
			</p>
			<pre>
				{`pre {
  display: block;
  padding: 7px;
  background-color: #F5F5F5;
  border: 1px solid #E1E1E8;
  border-radius: 3px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: Menlo, Monaco;
  line-height: 160%;
}`}
			</pre>
		</Section>
		<Section>
			<p>
				A small paragraph to <em>emphasis</em> and show{" "}
				<strong>important</strong> bits.
			</p>
			<ul>
				<li>This is a list item</li>
				<li>So is this - there could be more</li>
				<li>
					Make sure to style list items to:
					<ul>
						<li>Not forgetting child list items</li>
						<li>Not forgetting child list items</li>
						<li>Not forgetting child list items</li>
						<li>Not forgetting child list items</li>
					</ul>
				</li>
				<li>A couple more</li>
				<li>top level list items</li>
			</ul>
			<p>
				Don't forget <strong>ordered lists</strong>:
			</p>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>
					Aliquam tincidunt mauris eu risus.
					<ol>
						<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
						<li>Aliquam tincidunt mauris eu risus.</li>
					</ol>
				</li>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Aliquam tincidunt mauris eu risus.</li>
			</ol>
			<dl>
				<dt>Definition list</dt>
				<dd>
					Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</dd>
				<dt>Lorem ipsum dolor sit amet</dt>
				<dd>
					Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</dd>
			</dl>
		</Section>
		<Section>
			<p>
				I am <a href="?abc123">the a tag</a> example
			</p>

			<p>
				I am <strong>the strong tag</strong> example
			</p>
			<p>
				I am <em>the em tag</em> example
			</p>
			<p>
				I am <small>the small tag</small> example
			</p>
			<p>
				I am <big>the big tag</big> example
			</p>
			<p>
				I am <sup>the sup tag</sup> example
			</p>
			<p>
				I am <sub>the sub tag</sub> example
			</p>

			<p>
				I am <cite>the cite tag</cite> example
			</p>
			<p>
				I am <q>the q tag</q> example
			</p>

			<p>
				I am <abbr title="test">the abbr tag</abbr> example
			</p>
			<p>
				I am <acronym>the acronym tag</acronym> example
			</p>

			<p>
				I am <del>the del tag</del> example
			</p>
			<p>
				I am <ins>the ins tag</ins> example
			</p>

			<p>
				I am <dfn>the dfn tag</dfn> example
			</p>
			<p>
				I am <tt>the tt tag</tt> example
			</p>

			<p>
				I am <code>the code tag</code> example
			</p>
			<p>
				I am <kbd>the kbd tag</kbd> example
			</p>
			<p>
				I am <samp>the samp tag</samp> example
			</p>
			<p>
				I am <var>the var tag</var> example
			</p>
		</Section>
		<Section>
			<p>
				This paragraph contains many different, sometimes useful,
				<a href="https://www.w3schools.com/tags/">HTML tags</a>. Of course there
				are classics like <em>emphasis</em>, <strong>strong</strong>, and
				<small>small</small> but there are many others as well. Hover the
				following text for abbreviation tag:
				<abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym
				tag like this: <acronym title="For The Win">ftw</acronym>. You can
				define <del>deleted text</del> which often gets replaced with
				<ins>inserted</ins> text.
			</p>
			<p>
				You can also use <kbd>keyboard text</kbd>, which sometimes is styled
				similarly to the <code>&lt;code&gt;</code> or <samp>samp</samp> tags.
				Even more specifically, there is a tag just for <var>variables</var>.
				Not to be mistaken with blockquotes below, the quote tag lets you denote
				something as <q>quoted text</q>. Lastly don't forget the sub (H
				<sub>2</sub>O) and sup (E = MC<sup>2</sup>) tags.
			</p>
			<p>
				A link can have many formats:
				<a href="#">internal</a>, <a href="https://google.com">external</a>,
				<a href="mailto:user@domain.com">send mail</a>,
				<a href="tel:+491570156">call number</a>.
			</p>
			<p>
				Before proceeding, <strong>make sure</strong>
				you put on your safety goggles.
			</p>
			<p>
				We <em>had</em> to do something about it.
			</p>
			<p>
				Several species of <mark>salamander</mark>
				inhabit the temperate.
			</p>
			<p>
				<del>This text has been deleted</del>, here is the rest of the
				paragraph.
			</p>
			<p>
				You're late!
				<ins cite="#url" dateTime="2018-05">
					“A wizard is never late …”
				</ins>
			</p>
			<p>
				<s>Today's Special: Salmon</s> SOLD OUT.
			</p>
			<p>
				You could use this element to highlight
				<u>speling</u> mistakes.
			</p>
			<p>
				This is the first sentence.
				<small>This whole sentence is in small letters.</small>
			</p>
			<p>
				Almost every developer's favorite molecule is C<sub>8</sub>H
				<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
			</p>
			<p>
				The following equation: a<sup>2</sup>+ b<sup>2</sup>= c<sup>2</sup>.
			</p>
			<p>
				You can use
				<abbr title="Cascading Style Sheets">CSS</abbr> to style your HTML.
			</p>
			<p>
				A <dfn id="def-validator">validator</dfn> is a program that checks for
				syntax errors.
			</p>
			<p>
				First sentence in
				<cite>Nineteen Eighty-Four</cite> by George Orwell.
			</p>
			<p>
				According to Mozilla's website,
				<q cite="https://www.mozilla.org/en-US/about/history/details/">
					Firefox 1.0 was released in 2004.
				</q>
			</p>
			<p>method adds one or more elements to the end of an array.</p>
			<p>
				Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd>+<kbd>R</kbd> to
				re-render an MDN page.
			</p>
			<p>
				<samp>
					Keyboard not found, Press <kbd>F1</kbd> to continue
				</samp>
				.
			</p>
			<p>
				The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>.
			</p>
		</Section>

		<Section class={$.flex}>
			<b class={$.half}>
				<h5>unordered list:</h5>
				<br />
				<ul>
					<li>
						<p>level 1.1 (p)</p>
						<ul>
							<li>
								level 2.1
								<ul>
									<li>level 3.1</li>
									<li>
										<p>level 3.2 (p)</p>
									</li>
								</ul>
							</li>
							<li>level 2.2</li>
							<li>level 2.3</li>
						</ul>
					</li>
					<li>
						<p>level 1.2 (p)</p>
					</li>
					<li>
						<p>level 1.3 (p.1)</p>
						<p>level 1.3 (p.3)</p>
						<p>level 1.3 (p.3)</p>
					</li>
				</ul>
			</b>

			<b class={$.half}>
				<h5>ordered list:</h5>
				<br />
				<ol>
					<li>
						<p>level 1.1 (p)</p>
						<ol>
							<li>
								level 2.1
								<ol>
									<li>level 3.1</li>
									<li>
										<p>level 3.2 (p)</p>
									</li>
								</ol>
							</li>
							<li>level 2.2</li>
							<li>level 2.3</li>
						</ol>
					</li>
					<li>
						<p>level 1.2 (p)</p>
					</li>
					<li>
						<p>level 1.3 (p.1)</p>
						<p>level 1.3 (p.3)</p>
						<p>level 1.3 (p.3)</p>
					</li>
				</ol>
			</b>
		</Section>

		<Section>
			<table summary="Top 10 downloaded movies in 2011 using BitTorrent, in descending order, listing number of downloads and worldwide cinema grosses">
				<caption>Most Downloaded Movies on BitTorrent, 2011</caption>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Movie</th>
						<th>Downloads</th>
						<th>Grosses</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th colSpan="4">moviedatabase.com</th>
					</tr>
				</tfoot>
				<tbody>
					<tr>
						<th>1</th>
						<td>Fast Five</td>
						<td>9,260,000</td>
						<td>$626,137,675</td>
					</tr>
					<tr>
						<th>2</th>
						<td>The Hangover II</td>
						<td>8,840,000</td>
						<td>$581,464,305</td>
					</tr>
					<tr>
						<th>3</th>
						<td>Thor</td>
						<td>8,330,000</td>
						<td>$449,326,618</td>
					</tr>
					<tr>
						<th>4</th>
						<td>Source Code</td>
						<td>7,910,000</td>
						<td>$123,278,618</td>
					</tr>
					<tr>
						<th>5</th>
						<td>I Am Number Four</td>
						<td>7,670,000</td>
						<td>$144,500,437</td>
					</tr>
					<tr>
						<th>6</th>
						<td>Sucker Punch</td>
						<td>7,200,000</td>
						<td>$89,792,502</td>
					</tr>
					<tr>
						<th>7</th>
						<td>127 Hours</td>
						<td>6,910,000</td>
						<td>$60,738,797</td>
					</tr>
					<tr>
						<th>8</th>
						<td>Rango</td>
						<td>6,480,000</td>
						<td>$245,155,348</td>
					</tr>
					<tr>
						<th>9</th>
						<td>The King’s Speech</td>
						<td>6,250,000</td>
						<td>$414,211,549</td>
					</tr>
					<tr>
						<th>10</th>
						<td>Harry Potter</td>
						<td>6,030,000</td>
						<td>$1,328,111,219</td>
					</tr>
				</tbody>
			</table>
		</Section>

		<Section>
			<b>
				<button type="button">button</button>
				<button type="submit">submit</button>
				<button type="reset">reset</button>
				<button type="button" disabled>
					disabled
				</button>
			</b>

			<b>
				<input type="button" value="button" readOnly />
				<input type="submit" value="submit" readOnly />
				<input type="reset" value="reset" readOnly />
				<input type="button" value="disabled" disabled readOnly />
			</b>
		</Section>

		<Section class={$.flex}>
			<b class={$.half}>
				<b class={$.block}>
					<code>&lt;input type=text&gt;</code>
					<br />

					<input type="text" placeholder="Text Input" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=password&gt;</code>
					<br />

					<input type="password" placeholder="Type your Password" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=datetime&gt;</code>
					<br />

					<input type="datetime" value="1970-01-01T00:00:00Z" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=color&gt;</code>
					<br />

					<input type="color" value="#000000" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=number&gt;</code>
					<br />

					<input type="number" min="0" max="10" value="5" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=range&gt;</code>
					<br />

					<input type="range" value="10" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=date&gt;</code>
					<br />

					<input type="date" value="1970-01-01" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=month&gt;</code>
					<br />

					<input type="month" value="1970-01" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=radio&gt;</code>
					<br />

					<ul class="list list--bare">
						<li>
							<input
								name="radio"
								type="radio"
								class="radio"
								checked="checked"
								readOnly
							/>
							Option 1
						</li>
						<li>
							<input name="radio" type="radio" class="radio" />
							Option 2
						</li>
						<li>
							<input name="radio" type="radio" class="radio" />
							Option 3
						</li>
					</ul>
				</b>
			</b>

			<b class={$.half}>
				<b class={$.block}>
					<code>&lt;input type=week&gt;</code>
					<br />

					<input type="week" value="1970-W01" readOnly />
				</b>

				<b class={$.block}>
					<code>&lt;input type=url&gt;</code>
					<br />

					<input type="url" placeholder="http://yoursite.com" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=email&gt;</code>
					<br />

					<input type="email" placeholder="name@email.com" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=tel&gt;</code>
					<br />

					<input type="tel" placeholder="(999) 999-9999" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=search&gt;</code>
					<br />

					<input type="search" placeholder="Enter Search Term" />
				</b>

				<b class={$.block}>
					<code>&lt;input type=number&gt;</code>
					<br />

					<input type="number" placeholder="Enter a Number" />
				</b>

				<b class={$.block}>
					<code>&lt;select&gt;</code>
					<br />
					<select>
						<optgroup label="Theropods">
							<option>Tyrannosaurus</option>
							<option>Velociraptor</option>
							<option>Deinonychus</option>
						</optgroup>
						<optgroup label="Sauropods">
							<option>Diplodocus</option>
							<option>Saltasaurus</option>
							<option>Apatosaurus</option>
						</optgroup>
					</select>
				</b>

				<b class={$.block}>
					<code>&lt;textarea&gt;</code>
					<br />

					<textarea placeholder="Enter your message here"></textarea>
				</b>

				<b class={$.block}>
					<code>&lt;input type=checkbox&gt;</code>
					<br />

					<ul class="list list--bare">
						<li>
							<input
								name="checkbox"
								type="checkbox"
								checked="checked"
								readOnly
							/>
							Choice A
						</li>
						<li>
							<input name="checkbox" type="checkbox" />
							Choice B
						</li>
						<li>
							<input name="checkbox" type="checkbox" />
							Choice C
						</li>
					</ul>
				</b>
			</b>
		</Section>

		<Section>
			<img src="https://dummyimage.com/240x160/F7F7F7/B1B1B1" />
			<br />
			<img src="https://dummyimage.com/320x240/F7F7F7/B1B1B1" />
			<br />
			<img src="https://dummyimage.com/1280x800/F7F7F7/B1B1B1" />
		</Section>
	</b>
);
