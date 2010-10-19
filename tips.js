var tips = [];

tips.push({
	author: 'bentruyman',
	message: 'Using <em>Really</em> Long Explicit Ids',
	example: [
		'<div id="EN_US-Introduction-WelcomeMessage-RedText-Container">',
		'	<p id="EN_US-Introduction-WelcomeMessage-RedText-Container-Paragraph">',
		'		Welcome to Our Home Page!',
		'	</p>',
		'</div>'
	]
});

tips.push({
	author: 'unknown',
	message: 'Using <em>All</em> of the XHTML doctypes',
	example: [
		'<!DOCTYPE html PUBLIC',
		'	"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',
		'	"-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd',
		'	"-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Writing All Your Styles Inline to <em>Reduce</em> HTTP Requests',
	example: [
		'<html>',
		'	<head>',
		'		<link href="global.css" rel="stylesheet" /> <!-- BAD!! -->',
		'		<style>',
		'			#wrapper {',
		'				...',
		'			}',
		'		</style> <!-- GOOD!! -->',
		'	</head>',
		'</html>'
	]
});

tips.push({
	author: 'bentruyman',
	message: '<em>Never</em> Leaving An IMG Tag Unclosed',
	example: [
		'<img src="my-corporate-logo.gif"></img>'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Writing All Tags and Attributes in Uppercase for <em>Readability</em>',
	example: [
		'<DIV ID="ContainerWrapper">',
		'	<P>',
		'		This is a paragraph example.',
		'		<A HREF="/HomePage.htm" TARGET="_blank"></A>',
		'	</P>',
		'</DIV>'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Liberally Using <em>Documentation</em> to Describe Sections of Content',
	example: [
		'<!-- CONTAINER START: Container holds all the content-->',
		'<div id="global_content-Container">',
		'	<!-- CONTAINER|WELCOME START: Describe the website for users-->',
		'	<p id="global_content-Container-Welcome">',
		'		Welcome to our new home page.',
		'	</p> <!-- CONTAINER|WELCOME END -->',
		'</div><!-- CONTAINER END -->'
	]
});

tips.push({
	author: 'bentruyman',
	message: '<em>Never</em> Using Absolute URLs As the Underlying Path May Change',
	example: [
		'<a href="../../HomePage.htm">Home Page</a><br>',
		'<a href="./PrivacyPolicy.htm">Privacy Policy</a><br>',
		'<a href="./Products/Gallery.htm">Our Products</a><br>',
		'<a href="./ContactOurTeam.htm">Contact Our Sales Team</a><br>',
		'<a href="../index.htm">Go back</a>'
	]
});

tips.push({
	author: 'zetafleet',
	message: 'Using iframes to Include <em>3rd Party</em> Microsites'
});

tips.push({
	author: 'zetafleet',
	message: 'Requiring a Conference Call With the Contractor, the American Employee of the American Company, and an Employee of Their Own Indian Subcontracting Company in Order to Explain the <em>iframe-in-iframe</em> Functionality'
});

tips.push({
	author: 'bentruyman',
	message: 'Using <a href="http://html6.by.ru/">HTML6</a> Like A Boss'
});

tips.push({
	author: 'Brajeshwar',
	message: 'Working with the designer, who uses the ultimate tool <em>Frontpage</em>',
	example: [
		'<meta name="GENERATOR" content="Microsoft Frontpage 6.0"',
		'<meta name="ProgId" content="Frontpage.Editor.Document"'
	]
});

tips.push({
	author: 'ardgedee',
	message: 'Tables-fu',
	example: [
		'<table border="0" cellspacing="0" cellpadding="2" width="100%">',
		'    <tbody>',
		'        <tr>',
		'            <td colspan="2" class="p" width="634">This week\'s production meeting agenda:</td>',
		'            <td>&nbsp;</td>',
		'        </tr>',
		'        <tr>',
		'            <td class="li_bullet" valign="top" width="15" align="left">&bull;</td>',
		'            <td valign="top" width="615" class="li"><table><tr><td class="bold"><marquee>Server performance issues</marquee></td></tr></table></td>',
		'            <td>&nbsp;</td>',
		'        </tr>',
		'        <tr>',
		'            <td class="li_bullet" valign="top" width="15" align="left">&bull;</td>',
		'            <td valign="top" width="615" class="li">Revised coding standards progress report</td>',
		'            <td>&nbsp;</td>',
		'        </tr>',
		'    </tbody>',
		'</table>'
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Choosing just the right <em>meta</em> keywords',
	example: [
		'<!doctype html>',
		'<html>',
		'<head>',
		'   <title>Enterprise HTML - Provides proven high performance, enterprise-level and scalable HTML tips and best practices.</title>',
		'   <META NAME="KEYWORDS" CONTENT="enterprise,html,enterprise html,megan,fox,megan fox,megan fox naked,megan fox naked sexy,megan fox naked sexy striptease,megan fox naked sexy striptease sextape,megan fox naked sexy striptease sextape enterprise,megan fox naked sexy striptease sextape enterprise html">',
		'</head>'
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Maximizing font size and density (especially for mobile devices) with nested <em>H1</em>, <em>H2</em>, and <em>B</em> tags',
	example: [
		'<h1><b>Chapter One</b></h1>',
		'<h2><b>I am Nailed to the Hull</b></h2>'
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Formatting vertical whitespace with unclosed <em>P</em> tags',
	example: [
		'<img src="foo.jpg" />',
		'<p>',
		'<img src="bar.jpg" />',
		'<p>'
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Saving bandwidth with unclosed <em>LI</em> tags',
	example: [
		'<ul>',
		'   <li>cat',
		'   <li>dog',
		'   <li>elephant',
		'</ul>'
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Bullet-proof <em>rounded corners</em> that work all the way down to Netscape 4.79',
	example: [
		'<table>',
		'   <tr>',
		'      <td width="50"><img src="top-left.gif" height="50" width="50"></img></td>',
		'      <td height="50" bgcolor="#000000">',
		'      <td width="50"><img src="top-right.gif" height="50" width="50"></img></td>',
		'   </tr>',
		'   <tr>',
		'      <td width="50" bgcolor="#000000"></td>',
		'      <td bgcolor="#000000">',
		'         <h3 color="#ffff00">See?  Rounded Corners are Easy!  And Awesome!</h3>',
		'      </td>',
		'      <td width="50" bgcolor="#000000"></td>',
		'   </tr>',
		'   <tr>',
		'      <td width="50"><img src="bottom-left.gif" height="50" width="50"></img></td>',
		'      <td height="50" bgcolor="#000000">',
		'      <td width="50"><img src="bottom-right.gif" height="50" width="50"></img></td>',
		'   </tr>',
		'</table>' 
	]
});

tips.push({
	author: 'dandean',
	message: 'Store your <em>application\'s state</em> as a hash in a single hidden input on the page, because page-weight <em>is not my problem</em>.',
	example: [
		'<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNDk0MjI2NDgzD2QWAmYPZBYEAgEPZBYOAgEPF' + '\n' +
		'gIeBFRleHQFXjxtZXRhIGh0dHAtZXF1aXY9J3JlZnJlc2gnIGNvbnRlbnQ9JzA7dXJsPWh0dHA6Ly92bS1wYy1kYW5kL3dvcmRmbHkvcGxhdG' + '\n' +
		'Zvcm0vamF2YXNjcmlwdC5hc3B4Jz5kAggPFQEUL3dvcmRmbHkvZmF2aWNvbi5pY29kAgsPFQEkL3dvcmRmbHkvX2luYy9qcy9wb3Auc3Byb2N' + '\n' +
		'rZXRzP3Y9ZGV2ZAINDxUBHi93b3JkZmx5L19zbmMvanMvbWFpbi5qcz92PWRldmQCEA8VASAvd29yZGZseS9faW5jL2Nzcy9tYWluLmNzcz92' + '\n' +
		'PWRldmQCEQ8WAh4EaHJlZgUtL3dvcmRmbHkvX2luYy9jc3Mvc2VjdGlvbi9saWJyYXJpZXMuY3NzP3Y9ZGV2ZAISDxUEIC93b3JkZmx5L19pb' + '\n' +
		'mMvY3NzL2llLzkuY3NzP3Y9ZGV2IC93b3JkZmx5L19pbmMvY3NzL2llLzguY3NzP3Y9ZGV2IC93b3JkZmx5L19pbmMvY3NzL2llLzcuY3NzP3' + '\n' +
		'Y9ZGV2IC93b3JkZmx5L19pbmMvY3NzL2llLzYuY3NzP3Y9ZGV2ZAIDDxYCHgVjbGFzcwUrbGlicmFyaWVzX2JhY2tncm91bmQtdGhlbWVzX2l' + '\n' +
		'uZGV4IGxpYnJhcmllcxYCAgEPZBYEAgEPZBYEAgMPZBYGAgEPDxYCHwAFC1dvcmRGbHkgRGV2ZGQCAw8PFgIfAAUOV2VsY29tZSBiYWNrLCBk' + '\n' +
		'ZAIFDw8WAh8ABQNEYW5kZAIFD2QWBAIEDxYCHgJPbmdkAgcPZBYCAgIPZBYEAgIPDxYCHwAFEVN1YnNjcmliZXIgU2VhcmNoZGQCBg8WBB4Eb' + '\n' +
		'mFtZQUdY3RsMDAkdXhTZWFyY2hGb3JtJGJ0bl9zZWFyY2geCWlubmVyaHRtbAUGU2VhcmNoZAICDw8WBB4IQ3NzQ2xhc3MFGXdpdGgtaGVhZG' + '\n' +
		'luZyB3aXRoLXNpZGViYXIeBF8hU0ICAmQWCAIBD2QWAgIBDxYCHwQFIGN0bDAwJGNwaF9wcmVIZWFkZXIkYnRuX25ld1RoZW1lZAIDD2QWAgI' + '\n' +
		'ED2QWAgIJD2QWAgIBDxYCHghfX2xhYmVsc2UWBGYQEGRkFgBkZAIBD2QWAmYPDxYEHwAFA0FkZB4LQ29tbWFuZE5hbWUFBFNhdmVkZAIHD2QW' + '\n' +
		'AmYPZBYIAgEPFgIfA2hkAgMPZBYEZg8WAh8DaGQCAQ8WAh8DaGQCBQ8WAh8DaGQCBw8WAh8DaGQCCw9kFg4CAQ9kFgYCAQ8QZGQWAWZkAgUPD' + '\n' +
		'xYEHwkFCFByZXZpb3VzHgdFbmFibGVkaGRkAgcPDxYCHwkFBE5leHRkZAIDDxYCHgdGaWx0ZXJzMucBAAEAAAD/////AQAAAAAAAAAEAQAAAH' + '\n' +
		'9TeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0YDFbW1N5c3RlbS5TdHJpbmcsIG1zY29ybGliLCBWZXJzaW9uPTIuMC4wLjAsIEN1bHR' + '\n' +
		'1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM4ZTA4OV1dAwAAAAZfaXRlbXMFX3NpemUIX3ZlcnNpb24GAAAICAkCAAAA' + '\n' +
		'AgAAAAIAAAARAgAAAAQAAAAGAwAAAAZDdXN0b20GBAAAAAdXb3JkRmx5DQILZAIFDxYCHwsy5wgAAQAAAP////8BAAAAAAAAAAQBAAAAf1N5c' + '\n' +
		'3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkxpc3RgMVtbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT' + '\n' +
		'1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0DAAAABl9pdGVtcwVfc2l6ZQhfdmVyc2lvbgYAAAgICQIAAAAoAAA' + '\n' +
		'AKAAAABECAAAAQAAAAAYDAAAADEFsbCBFbGVtZW50cwYEAAAAGUF1c3RyYWxpYW4gQmFsbGV0IEV4YW1wbGUGBQAAAA1iaWxsJ3MgbGF5b3V0' + '\n' +
		'BgYAAAAYRGVwbG95bWVudFRlc3RfMjAxMDA2MzBhBgcAAAATRm9yIEphbWllIGF0IE5ldyA0MgYIAAAAG0ZvciBLYXRlIGF0IFN5ZG5leSBTe' + '\n' +
		'W1waG9ueQYJAAAADUdlcm1hbiBMYXlvdXQGCgAAACBKYXdicmVha2VyX05ld0xheW91dElzc3VlRGF2aWQwMQYLAAAABGthY2kGDAAAABFLZW' + '\n' +
		'xseSBRQSBEdXN0Ym93bAYNAAAAF0tlbGx5IFFBIER1c3Rib3dsIDMtY29sBg4AAAAOS2VsbHkgUUEgR2FiYmEGDwAAAA1LZWxseSBRQSBUZXN' + '\n' +
		'0BhAAAAAJS2V2aW5UZXN0BhEAAAAMbGF5b3V0IGVycm9yBhIAAAAUTmV3IExheW91dCAyMDEwMDExNWEGEwAAAAJuegYUAAAAGE9uZSBCaWcg' + '\n' +
		'SW1hZ2UgT25lIENvbHVtbgYVAAAAClJPSCBMZXR0ZXIGFgAAAA9ST0ggTGV0dGVyIENvcHkGFwAAAA1UZXN0IDIgTGF5b3V0BhgAAAALVGVzd' + '\n' +
		'CBMYXlvdXQGGQAAABdXYWx0b24gQXJ0cyBDZW50ZXIgSWRlYQYaAAAAFFdvcmRGbHkgRm9yd2FyZCBGb3JtBhsAAAAUV29yZEZseSBOZXdzbG' + '\n' +
		'V0dGVyIEEGHAAAABlXb3JkRmx5IE5ld3NsZXR0ZXIgQSBDb3B5Bh0AAAAUV29yZEZseSBOZXdzbGV0dGVyIEIGHgAAABRXb3JkRmx5IE5ld3N' + '\n' +
		'sZXR0ZXIgQwYfAAAAFFdvcmRGbHkgTmV3c2xldHRlciBEBiAAAAAUV29yZEZseSBOZXdzbGV0dGVyIEUGIQAAABRXb3JkRmx5IE5ld3NsZXR0' + '\n' +
		'ZXIgRgYiAAAAFFdvcmRGbHkgTmV3c2xldHRlciBHBiMAAAASV29yZEZseSBQb3N0Y2FyZCBBBiQAAAASV29yZEZseSBQb3N0Y2AyZCBCBiUAA' + '\n' +
		'AASV29yZEZseSBQb3N0Y2FyZCBABiYAAAASV29yZEZseSBQb3N0Y2FyZCBEBicAAAASV29yZEZseSBQb3N0Y2FyZCBFBigAAAATV29yZEZseS' + '\n' +
		'BVbnN1YnNjcmliZQYpAAAABnplcm8gNAYqAAAABnplcm8gNQ0YC2QCBw9kFgICAQ8WBB4IUGFnZVNpemUCGR4LXyFJdGVtQ291bnQCGRY0Zg9' + '\n' +
		'kFgJmD2QWCmYPZBYCZg8PFgYfCQUEU29ydB4PQ29tbWFuZEFyZ3VtZW50BQROYW1lHwAFBE5hbWVkZAIBD2QWAmYPDxYGHwkFBFNvcnQfDgUL' + '\n' +
		'VXNlckRlZmluZWQfAAUEVHlwZWRkAgIPZBYCZg8PFgYfCQUEU29ydB8OBQZMYXlvdXQfAAUGTGF5b3V0ZGQCAw9kFgJmDw8WBh8JBQRTb3J0H' + '\n' +
		'w4FEERhdGVMYXN0TW9kaWZpZWQfAAUMTGFzdCB1cGRhdGVkZGQCBA8PFgIfAGVkZAIBD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh' + '\n' +
		'4DcmVsBSQ0NGMwNmVkNS0zYTJkLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFDEFsbCBFbGVtZW50c2RkAgIPDxYEHwk' + '\n' +
		'FBEVkaXQfDgUkNDRjMDZlZDUtM2EyZC1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBA8PFgQfCQUJRHVwbGljYXRlHw4FJDQ0YzA2ZWQ1LTNh' + '\n' +
		'MmQtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgYPDxYEHwkFBlJlbmFtZR8OBSQ0NGMwNmVkNS0zYTJkLWRmMTEtYTg4ZS0wMDUwNTY5MzI0M' + '\n' +
		'zhkZAIDDxYCHgdWaXNpYmxlaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUMQWxsIEVsZW1lbnRzZGQCAw8PFgYfAA' + '\n' +
		'UUOC8yNy8yMDEwIDk6NDA6NTQgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAICD2QWAmYPZBYKZg8' + '\n' +
		'PFgYfAGUfBgUEbmFtZR8HAgIWAh8PBSQzYWEzYWFlMC1jM2Y3LWRlMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFDGFzZGZh' + '\n' +
		'c2RmYXNkZmRkAgIPDxYEHwkFBEVkaXQfDgUkM2FhM2FhZTAtYzNmNy1kZTExLWE4OGUtMDA1MD02OTMyNDM4ZGQCBA8PFgQfCQUJRHVwbGljY' + '\n' +
		'XRlHw4FJDNhYTNhYWUwLWMzZjctZGUxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgYPDxYEHwkFBlJlbmFtZR8OBSQzYWEzYWFlMC1jM2Y3LWRlMT' + '\n' +
		'EtYTg4ZS0wMDUwNTY5MzI0MzhkZAIDDxYCHxBoZAIBDw8WBh8ABQZDdXN0b20fBgUEdHlwZR8HAgJkZAICDw8WAh8ABRRXb3JkRmx5IE5ld3N' + '\n' +
		'sZXR0ZXIgQWRkAgMPDxYGHwAFEVRvZGF5IGF0IDExOjE1IEFNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwIC' + '\n' +
		'ZGQCAw9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkYjZjZmI4ODUtNjUwNC1kZjExLWE4OGUtMDA1MDU2OTMyNDM4FgQCAQ9kF' + '\n' +
		'ghmDw8WAh8ABRlBdXN0cmFsaWFuIEJhbGxldCBFeGFtcGxlZGQCAg8PFgQfCQUERWRpdB8OBSRiNmNmYjg4NS02NTA0LWRmMTEtYTg4ZS0wMD' + '\n' +
		'UwNTY5MzI0MzhkZAIEDw8WBB8JBQlEdXBsaWNhdGUfDgUkYjZjZmI4ODUtNjUwNC1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBg8PFgQfCQU' + '\n' +
		'GUmVuYW1lHw4FJGI2Y2ZiODg1LTY1MDQtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1c3RvbR8GBQR0eXBl' + '\n' +
		'HwcCAmRkAgIPDxYCHwAFGUF1c3RyYWxpYW4gQmFsbGV0IEV4YW1wbGVkZAIDDw8WBh8ABRQ4LzI3LzIwMTAgOTo0MDo1MiBBTR8GBQxsYXN0L' + '\n' +
		'XVwZGF0ZWQfBwICZGQCBA8PFgYfBgUGc2VsZWN0HwBlHwcCAmRkAgQPZBYCZg9kFgpmDw8WBh8AZR8GBQRuYW1lHwcCAhYCHw8FJGUxMTA0MD' + '\n' +
		'kzLTYzZDItZGYxMS1iY2M1LTAwNTA1NmJhMDQ4OBYEAgEPZBYIZg8PFgIfAAUdYmFja2dyb3VuZCByZWdpb24gZm9vdGVyIGxlYWtkZAICDw8' + '\n' +
		'WBB8JBQRFZGl0Hw4FJGUxMTA0MDkzLTYzZDItZGYxMS1iY2M1LTAwNTA1NmJhMDQ4OGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSRlMTEwNDA5' + '\n' +
		'My02M2QyLWRmMTEtYmNjNS0wMDUwNTZiYTA0ODhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkZTExMDQwOTMtNjNkMi1kZjExLWJjYzUtMDA1MDU2Y' + '\n' +
		'mEwNDg4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUvYmFja2dyb3VuZCByZWdpb24gZm9vdGVyIG' + '\n' +
		'xlYWtfREVMRVRFRCgxOTU2ODY0NClkZAIDDw8WBhFABRQxMC83LzIwMTAgMzozODoxNiBQTR8GBQxsYXN0LXVwZGF0ZWQfBwICZGQCBA8PFgY' + '\n' +
		'fBgUGc2VsZWN0HwBlHwcCAmRkAgUPZBYCZg9kFgpmDw8WBh8AZR8GBQRuYW1lHwcCAhYCHw8FJDA0Y2JjZWQzLWUwYmQtZGUxMS1hODhlLTAw' + '\n' +
		'NTA1NjkzMjQzOBYEAgEPZBYIZg8PFgIfAAUQQ3VzdG9tIFN3ZWV0IFBlYWRkAgIPDxYEHwkFBEVkaXQfDgUkMDRjYmNlZDMtZTBiZC1kZTExL' + '\n' +
		'WE4OGUtMDA1MDU2OTMyNDM4ZGQCBA8PFgQfCQUJRHVwbGljYXRlHw4FJDA0Y2JjZWQzLWUwYmQtZGUxMS1hODhlLTAwNTA1NjkzMjQzOGRkAg' + '\n' +
		'YPDxYEHwkFBlJlbmFtZR8OBSQwNGNiY2VkMy1lMGJkLWRlMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIDDxYCHxBoZAIBDw8WBh8ABQZDdXN0b20' + '\n' +
		'fBgUEdHlwZR8HAgJkZAICDw8WAh8ABSJDdXN0b20gTGF5b3V0X0RFTEVURUQoLTE1NzcxMjQxNjkpZGQCAw8PFgYfAAUUOC8yNy8yMDEwIDk6' + '\n' +
		'NDA6NDggQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIGD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZ' + '\n' +
		'R8HAgIWAh8PBSRlNjBjMzQ3YS04MGJiLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFE0ZvciBKYW1pZSBhdCBOZXcgND' + '\n' +
		'JkZAICDw8WBB8JBQRFZGl0Hw4FJGU2MGMzNDdhLTgwYmItZGYxMS05MGFhLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSR' + '\n' +
		'lNjBjMzQ3YS04MGJiLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkZTYwYzM0N2EtODBiYi1kZjExLTkwYWEt' + '\n' +
		'MDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUTRm9yIEphbWllIGF0IE5ldyA0M' + '\n' +
		'mRkAgMPDxYGHwAFFDkvOC8yMDEwIDEyOjM4OjAzIFBNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCBw' + '\n' +
		'9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkZThlYjhmYmYtNmRiZi1kZjExLTkwYWEtMDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8' + '\n' +
		'WAh8ABRtGb3IgS2F0ZSBhdCBTeWRuZXkgU3ltcGhvbnlkZAICDw8WBB8JBQRFZGl0Hw4FJGU4ZWI4ZmJmLTZkYmYtZGYxMS05MGFhLTAwNTA1' + '\n' +
		'NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSRlOGViOGZiZi02ZGJmLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZ' + '\n' +
		'W5hbWUfDgUkZThlYjhmYmYtNmRiZi1kZjExLTkwYWEtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBw' + '\n' +
		'ICZGQCAg8PFgIfAAUbRm9yIEthdGUgYXQgU3lkbmV5IFN5bXBob255ZGQCAw8PFgYfAAURVG9kYXkgYXQgMTI6MzkgUE0fBgUMbGFzdC11cGR' + '\n' +
		'hdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIID2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh8PBSQ3MDk3OTBjOC1i' + '\n' +
		'OGEwLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFDEdlcm1hbiBUaGVtZWRkAgIPDxYEHwkFBEVkaXQfDgUkNzA5NzkwY' + '\n' +
		'zgtYjhhMC1kZjExLTkwYWEtMDA1MDU2OTMyNDM4ZGQCBA8PFgQfCQUJRHVwbGljYXRlHw4FJDcwOTc5MGM4LWI4YTAtZGYxMS05MGFhLTAwNT' + '\n' +
		'A1NjkzMjQzOGRkAgYPDxYEHwkFBlJlbmFtZR8OBSQ3MDk3OTBjOC1iOGEwLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIDDxYCHxBoZAIBDw8' + '\n' +
		'WBh8ABQZDdXN0b20fBgUEdHlwZR8HAgJkZAICDw8WAh8ABQ1HZXJtYW4gTGF5b3V0ZGQCAw8PFgYfAAUUOC8yNy8yMDEwIDk6NDE6MDcgQU0f' + '\n' +
		'BgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIJD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh8PB' + '\n' +
		'SQxZWVhNjgyOC01MDRlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFEUtlbGx5IFFBIER1c3Rib3dsZGQCAg8PFgQfCQ' + '\n' +
		'UERWRpdB8OBSQxZWVhNjgyOC01MDRlLWRmMTEtYTg4ZS0w0DUwNTY5MzI0MzhkZAIEDw8WBB8JBQlEdXBsaWNhdGUfDgUkMWVlYTY4MjgtNTA' + '\n' +
		'0ZS1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBg8PFgQfCQUGUmVuYW1lHw4FJDFlZWE2ODI4LTUwNGUtZGYxMS1hODhlLTAwNTA1NjkzMjQz' + '\n' +
		'OGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1c3RvbR8GBQR0eXBlHwcCAmRkAgIPDxYCHwAFEUtlbGx5IFFBIER1c3Rib3dsZGQCAw8PFgYfAAUUO' + '\n' +
		'C8yNy8yMDEwIDk6NDA6NTYgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIKD2QWAmYPZBYKZg8PFg' + '\n' +
		'YfAGUfBgUEbmFtZR8HAgIWAh8PBSQ3ODI2NDViOS01NjRlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFF0tlbGx5IFF' + '\n' +
		'BIER1c3Rib3dsIDMtY29sZGQCAg8PFgQfCQUERWRpdB8OBSQ3ODI2NDViOS01NjRlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIEDw8WBB8J' + '\n' +
		'BQlEdXBsaWNhdGUfDgUkNzgyNjQ1YjktNTY0ZS1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBg8PFgQfCQUGUmVuYW1lHw4FJDc4MjY0NWI5L' + '\n' +
		'TU2NGUtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1c3RvbR8GBQR0eXBlHwcCAmRkAgIPDxYCHwAFF0tlbG' + '\n' +
		'x5IFFBIER1c3Rib3dsIDMtY29sZGQCAw8PFgYfAAUUOC8yNy8yMDEwIDk6NDA6NTcgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwY' + '\n' +
		'FBnNlbGVjdB8AZR8HAgJkZAILD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh8PBSRiYzJkNTQ3Yy1mYzVkLWRmMTEtYTg4ZS0wMDUw' + '\n' +
		'NTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFDktlbGx5IFFBIEdhYmJhZGQCAg8PFgQfCQUERWRpdB8OBSRiYzJkNTQ3Yy1mYzVkLWRmMTEtYTg4Z' + '\n' +
		'S0wMDUwNTY5MzI0MzhkZAIEDw8WBB8JBQlEdXBsaWNhdGUfDgUkYmMyZDU0N2MtZmM1ZC1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBg8PFg' + '\n' +
		'QfCQUGUmVuYW1lHw4WJGJjMmQ1NDdjLWZjNWQtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1c3RvbR8GBQR' + '\n' +
		'0eXBlHwcCAmRkAgIPDxYCHwAFDktlbGx5IFFBIEdhYmJhZGQCAw8PFgYfAAUUOC8yNy8yMDEwIDk6NDA6NTggQU0fBgUMbGFzdC11cGRhdGVk' + '\n' +
		'HwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIMD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh8PBSQ2NmM3ZTg2MS1lZTFjL' + '\n' +
		'WRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFDUtlbGx5IFFBIFRlc3RkZAICDw8WBB8JBQRFZGl0Hw4FJDY2YzdlODYxLW' + '\n' +
		'VlMWMtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSQ2NmM3ZTg2MS1lZTFjLWRmMTEtYTg4ZS0wMDUwNTY' + '\n' +
		'5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkNjZjN2U4NjEtZWUxYy1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYf' + '\n' +
		'AAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUNS2VsbHkgUUEgVGVzdGRkAgMPDxYGHwAFFDgvMjcvMjAxMCA5OjQwOjUzIEFNHwYFD' + '\n' +
		'Gxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCDQ9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkZD' + '\n' +
		'QwMmU3MjktODkwMy1kZjExLWE4OGUtMDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABQJuemRkAgIPDxYEHwkFBEVkaXQfDgUkZDQwMmU3Mjk' + '\n' +
		'tODkwMy1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBA8PFgQfCQUJRHVwbGljYXRlHw4FJGQ0MDJlNzI5LTg5MDMtZGYxMS1hODhlLTAwNTA1' + '\n' +
		'NjkzMjQzOGRkAgYPDxYEHwkFBlJlbmFtZR8OBSRkNDAyZTcyOS04OTAzLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIDDxYCHxBoZAIBDw8WB' + '\n' +
		'h8ABQZDdXN0b20fBgUEdHlwZR8HAgJkZAICDw8WAh8ABQJuemRkAgMPDxYGHwAFFDgvMjcvMjAxMCA5OjQwOjUxIEFNHwYFDGxhc3QtdXBkYX' + '\n' +
		'RlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCDg9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkOGMyZDM2Y2ItYzY' + '\n' +
		'0Mi1kZjExLWE4OGUtMDA1MGU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABRhPbmUgQmlnIEltYWdlIE9uZSBDb2x1bW5kZAICDw8WBB8JBQRFZGl0' + '\n' +
		'Hw4FJDhjMmQzNmNiLWM2NDItZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSQ4YzJkMzZjYi1jNjQyLWRmM' + '\n' +
		'TEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkOGMyZDM2Y2ItYzY0Mi1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCAw' + '\n' +
		'8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUYT25lIEJpZyBJbWFnZSBPbmUgQ29sdW1uZGQCAw8PFgYfAAU' + '\n' +
		'UOC8yNy8yMDEwIDk6NDA6NTUgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIPD2QWAmYPZBYKZg8P' + '\n' +
		'FgYfAGUfBgUEbmFtZR8HAgIWAh8PBSRlZWQ2MWM1My02OGJlLWRlMTEtYTg4ZS0wMDUwNTY5MzI0MzgWBAIBD2QWCGYPDxYCHwAFClJPSCBMZ' + '\n' +
		'XR0ZXJkZAICDw8WBB8JBQRFZGl0Hw4FJGVlZDYxYzUzLTY4YmUtZGUxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR' + '\n' +
		'8OBSRlZWQ2MWM1My02OGJlLWRlMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkZWVkNjFjNTMtNjhiZS1kZTExLWE' + '\n' +
		'4OGUtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUKUk9IIExldHRlcmRkAgMP' + '\n' +
		'DxYGHwAFFDgvMjcvMjAxMCA5OjQwOjQ3IEFNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCEA9kFgJmD' + '\n' +
		'2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkMTBjNjgwNjUtZDdiZC1kZTExLWE4OGUtMDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABQ' + '\n' +
		'lTd2VldCBQZWFkZAICDw8WBB8JBQRFZGl0Hw4FJDEwYzY4MDY1LWQ3YmQtZGUxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGx' + '\n' +
		'pY2F0ZR8OBSQxMGM2ODA2NS1kN2JkLWRlMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkMTBjNjgwNjUtZDdiZC1k' + '\n' +
		'ZTExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUSV29yZEZseSBQb' + '\n' +
		'3N0Y2FyZCBBZGQCAw8PFgYfAAUUOC8yNy8yMDEwIDk6NDA6NDYgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR' + '\n' +
		'8HAgJkZAIRD2QWAmYPZBYKZg8PFgYfAGUfBgUEbmFtZR8HAgIWAh8PBSQ3YTJiZmNiYS1lYTlmLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzgWBAI' + '\n' +
		'BD2QWCGYPDxYCHwAFBHRlc3RkZAICDw8WBB8JBQRFZGl0Hw4FJDdhMmJmY2JhLWVhOWYtZGYxMS05MGFhLTAwNTA1NjkzMjQzOGRkAgQPDxYE' + '\n' +
		'HwkFCUR1cGxpY2F0ZR8OBSQ3YTJiZmNiYS1lYTlmLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkN2EyYmZjY' + '\n' +
		'mEtZWE5Zi1kZjExLTkwYWEtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAUZQX' + '\n' +
		'VzdHJhbGlhbiBCYWxsZXQgRXhhbXBsZWRkAgMPDxYGHwAFFDgvMjcvMjAxMCA5OjQxOjAyIEFNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8' + '\n' +
		'WBh8GBQZzZWxlY3QfAGUfBwICZGQCEg9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkZmE2NWEyYjAtYWNhMC1kZjExLTkwYWEt' + '\n' +
		'MDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABQZUZXN0IDJkZAICDw8WBB8JBQRFZGl0Hw4FJGZhNjVhMmIwLWFjYTAtZGYxMS05MGFhLTAwN' + '\n' +
		'TA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSRmYTY1YTJiMC1hY2EwLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIGDw8WBB8JBQ' + '\n' +
		'ZSZW5hbWUfDgUkZmE2NWEyYjAtYWNhMC1kZjExLTkwYWEtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCAQ8PFgYfAAUGQ3VzdG9tHwYFBHR5cGU' + '\n' +
		'fBwICZGQCAg8PFgIfAAUNVGVzdCAyIExheW91dGRkAgMPDxYGHwAFFDgvMjcvMjAxMCA5OjQxOjA2IEFNHwYFDGxhc3QtdXBkYXRlZB8HAgJk' + '\n' +
		'ZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCEw9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkZmFiYzcxOGEtZmQ5Zi1kZjExL' + '\n' +
		'TkwYWEtMDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABQ1UZXN0IDIgQlRoZW1lZGQCAg8PFgQfCQUERWRpdB8OBSRmYWJjNzE4YS1mZDlmLW' + '\n' +
		'RmMTEtOTBhYS0wMDUwNTY5MzI0MzhkZAIEDw8WBB8JBQlEdXBsaWNhdGUfDgUkZmFiYzcxOGEtZmQ5Zi1kZjExLTkwYWEtMDA1MDU2OTMyNDM' + '\n' +
		'4ZGQCBg8PFgQfCQUGUmVuYW1lHw4FJGZhYmM3MThhLWZkOWYtZGYxMS05MGFhLTAwNTA1NjkzMjQzOGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1' + '\n' +
		'c3RvbR8GBQR0eXBlHwcCAmRkAgIPDxYCHwAFDVRlc3QgMiBMYXlvdXRkZAIDDw8WBh8ABRQ4LzI3LzIwMTAgOTo0MTowNSBBTR8GBQxsYXN0L' + '\n' +
		'XVwZGF0ZWQfBwICZGQCBA8PFgYfBgUGc2VsZWN0HwBlHwcCAmRkAhQPZBYCZg9kFgpmDw8WBh8AZR8GBQRuYW1lHwcCAhYCHw8FJDdhYTJlNT' + '\n' +
		'IzLWVmOWYtZGYxMS05MGFhLTAwNTA1NjkzMjQzOBYEAgEPZBYIZg8PFgIfAAULVGVzdCBCVGhlbWVkZAICDw8WBB8JBQRFZGl0Hw4FJDdhYTJ' + '\n' +
		'lNTIzLWVmOWYtZGYxMS05MGFhLTAwNTA1NjkzMjQzOGRkAgQPDxYEHwkFCUR1cGxpY2F0ZR8OBSQ3YWEyZTUyMy1lZjlmLWRmMTEtOTBhYS0w' + '\n' +
		'MDUwNTY5MzI0MzhkZAIGDw8WBB8JBQZSZW5hbWUfDgUkN2FhMmU1MjMtZWY5Zi1kZjExLTkwYWEtMDA1MDU2OTMyNDM4ZGQCAw8WAh8QaGQCA' + '\n' +
		'Q8PFgYfAAUGQ3VzdG9tHwYFBHR5cGUfBwICZGQCAg8PFgIfAAULVGVzdCBMYXlvdXRkZAIDDw8WBh8ABRQ4LzI3LzIwMTAgOTo0MTowMyBBTR' + '\n' +
		'8GBQxsYXN0LXVwZGF0ZWQfBwICZGQCBA8PFgYfBgUGc2VsZWN0HwBlHwcCAmRkAhUPZBYCZg9kFgpmDw8WBh8AZR8GBQRuYW1lHwcCAhYCHw8' + '\n' +
		'FJDg2YTQ2MjE5LTViZDItZGYxMS1iY2M1LTAwNTA1NmJhMDQ4OBYEAgEPZBYIZg8PFgIfAAUwdGVzdCBzaW5nbGUgY29sdW1uIGxheW91dCB3' + '\n' +
		'aXRoIGJhY2tncm91bmQgZXJyb3JzZGQCAg8PFgQfCQUERWRpdB8OBSQ4NmE0NjIxOS01YmQyLWRmMTEtYmNjNS0wMDUwNTZiYTA0ODhkZAIED' + '\n' +
		'w8WBB8JBQlEdXBsaWNhdGUfDgUkODZhNDYyMTktNWJkMi1kZjExLWJjYzUtMDA1MDU2YmEwNDg4ZGQCBg8PFgQfCQUGUmVuYW1lHw4FJDg2YT' + '\n' +
		'Q2MjE5LTViZDItZGYxMS1iY2M1LTAwNTA1NmJhMDQ4OGRkAgMPFgIfEGhkAgEPDxYGHwAFBkN1c3RvbR8GBQR0eXBlHwcCAmRkAgIPDxYCHwA' + '\n' +
		'FRXRlc3Qgc2luZ2xlIGNvbHVtbiBsYXlvdXQgd2l0aCBiYWNrZ3JvdW5kIGVycm9yc19ERUxFVEVEKC0xMDMzNzIzODkyKWRkAgMPDxYGHwAF' + '\n' +
		'FDEwLzcvMjAxMCAyOjM3OjM2IFBNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh8GBQZzZWxlY3QfAGUfBwICZGQCFg9kFgJmD2QWCmYPD' + '\n' +
		'xYGHwBlHwYFBG5hbWUfBwICFgIfDwUkMmFmOGE2YzUtMDY4ZS1kZjExLWE4OGUtMDA1MDU2OTMyNDM4FgQCAQ9kFghmDw8WAh8ABRdXYWx0b2' + '\n' +
		'4gQXJ0cyBDZW50ZXIgSWRlYWRkAgIPDxYEHwkFBEVkaXQfDgUkMmFmOGE2YzUtMDY4ZS1kZjExLWE4OGUtMDA1MDU2OTMyNDM4ZGQCBA8PFgQ' + '\n' +
		'fCQUJRHVwbGljYXRlHw4FJDJhZjhhNmM1LTA2OGUtZGYxMS1hODhlLTAwNTA1NjkzMjQzOGRkAgYPDxYEHwkFBlJlbmFtZR8OBSQyYWY4YTZj' + '\n' +
		'NS0wNjhlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIDDxYCHxBoZAIBDw8WBh8ABQZDdXN0b20fBgUEdHlwZR8HAgJkZAICDw8WAh8ABRdXY' + '\n' +
		'Wx0b24gQXJ0cyBDZW50ZXIgSWRlYWRkAgMPDxYGHwAFFDgvMjcvMjAxMCA5OjQxOjAxIEFNHwYFDGxhc3QtdXBkYXRlZB8HAgJkZAIEDw8WBh' + '\n' +
		'8GBQZzZWxlY3QfAGUfBwICZGQCFw9kFgJmD2QWCmYPDxYGHwBlHwYFBG5hbWUfBwICFgIfDwUkMzI4ZWUyMTAtMDJiOS1kZTExLWJlN2MtMDA' + '\n' +
		'1MDU2YmEwNDg4FgQCAQ9kFghmDw8WAh8ABRhXb3JkRmx5IEJhc2ljIFBvc3RjYXJkIEFkZAICDw8WBh8ABQRWaWV3HwkFBEVkaXQfDgUkMzI4' + '\n' +
		'ZWUyMTAtMDJiOS1kZTExLWJlN2MtMDA1MDU2YmEwNDg4ZGQCBA8PFgQfCQUJRHVwbGljYXRlHw4FJDMyOGVlMjEwLTAyYjktZGUxMS1iZTdjL' + '\n' +
		'TAwNTA1NmJhMDQ4OGRkAgYPDxYGHwkFBlJlbmFtZR8OBSQzMjhlZTIxMC0wMmI5LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODgfEGhkZAIDDxYCHx' + '\n' +
		'BoZAIBDw8WBh8ABQdXb3JkRmx5HwYFBHR5cGUfBwICZGQCAg8PFgIfAAUSV29yZEZseSBQb3N0Y2FyZCBBZGQCAw8PFgYfAAUUOC8yNy8yMDE' + '\n' +
		'wIDk6NDA6NDQgQU0fBgUMbGFzdC11cGRhdGVkHwcCAmRkAgQPDxYGHwYFBnNlbGVjdB8AZR8HAgJkZAIYD2QWAmYPZBYKZg8PFgYfAGUfBgUE' + '\n' +
		'bmFtZR8HAgIWAh8PBSQyYTg5NDc5MC0wMmI5LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODgWBAIBD2QWCGYPDxYCHwAFGFdvcmRGbHkgQmFzaWMgU' + '\n' +
		'G9zdGNhcmQgQmRkAgIPDxYGHwAFBFZpZXcfCQUERWRpdB8OBSQyYTg5NDc5MC0wMmI5LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODhkZAIEDw8WBB' + '\n' +
		'8JBQlEdXBsaWNhdGUfDgUkMmE4OTQ3OTAtMDJiOS1kZTExLWJlN2MtMDA1MDU2YmEwNDg4ZGQCBg8PFgYfCQUGUmVuYW1lHw4FJDJhODk0Nzk' + '\n' +
		'wLTAyYjktZGUxMS1iZTdjLTAwNTA1NmJhMDQ4OB8QaGRkAgMPFgIfEGhkAgEPDxYGHwAFB1dvcmRGbHkfBgUEdHlwZR8HAgJkZAICDw8WAh8A' + '\n' +
		'BRJXb3JkRmx5IFBvc3RjYXJkIEJkZAIDDw8WBh8ABRQ4LzI3LzIwMTAgOTo0MDo0NSBBTR8GBQxsYXN0LXVwZGF0ZWQfBwICZGQCBA8PFgYfB' + '\n' +
		'gUGc2VsZWN0HwBlHwcCAmRkAhkPZBYCZg9kFgpmDw8WBh8AZR8GBQRuYW1lHwcCAhYCHw8FJDA1Yjg5MjAyLTkwNmUtZGYxMS1hODhlLTAwNT' + '\n' +
		'A1NjkzMjQzOBYEAgEPZBYIZg8PFgIfAAUWV29yZEZseSBCYXNpYzogRm9yd2FyZGRkAgIPDxYGHwAFBFZpZXcfCQUERWRpdB8OBSQwNWI4OTI' + '\n' +
		'wMi05MDZlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzhkZAIEDw8WBB8JBQlEdXBsaWNhdGUfDgUkMDViODkyMDItOTA2ZS1kZjExLWE4OGUtMDA1' + '\n' +
		'MDU2OTMyNDM4ZGQCBg8PFgYfCQUGUmVuYW1lHw4FJDA1Yjg5MjAyLTkwNmUtZGYxMS1hODhlLTAwNTA1NjkzMjQzOB8QaGRkAgMPFgIfEGhkA' + '\n' +
		'gEPDxYGHwAFB1dvcmRGbHkfBgUEdHlwZR8HAgJkZAICDw8WAh8ABRRXb3JkRmx5IEZvcndhcmQgRm9ybWRkAgMPDxYGHwAFFTgvMjcvMjAxMC' + '\n' +
		'AxMDo0MDo1NiBBTR8GBQxsYXN0LXVwZGF0ZWQfBwICZGQCBA8PFgYfBgUGc2VsZWN0HwBlHwcCAmRkAgsPEGRkFgFmZAIRDxAPFgYeDURhdGF' + '\n' +
		'UZXh0RmllbGQFBE5hbWUeDkRhdGFWYWx1ZUZpZWxkBQRHdWlkHgtfIURhdGFCb3VuZGdkEBUoDEFsbCBFbGVtZW50cxlBdXN0cmFsaWFuIEJh' + '\n' +
		'bGxldCBFeGFtcGxlDWJpbGwncyBsYXlvdXQYRGVwbG95bWVudFRlc3RfMjAxMDA2MzBhE0ZvciBKYW1pZSBhdCBOZXcgNDIbRm9yIEthdGUgY' + '\n' +
		'XQgU3lkbmV5IFN5bXBob255DUdlcm1hbiBMYXlvdXQgSmF3YnJlYWtlcl9OZXdMYXlvdXRJc3N1ZURhdmlkMDEEa2FjaRFLZWxseSBRQSBEdX' + '\n' +
		'N0Ym93bBdLZWxseSBRQSBEdXN0Ym93bCAzLWNvbA5LZWxseSBRQSBHYWJiYQ1LZWxseSBRQSBUZXN0CUtldmluVGVzdAxsYXlvdXQgZXJyb3I' + '\n' +
		'UTmV3IExheW91dCAyMDEwMDExNWECbnoYT25lIEJpZyBJbWFnZSBPbmUgQ29sdW1uClJPSCBMZXR0ZXIPUk9IIExldHRlciBDb3B5DVRlc3Qg' + '\n' +
		'MiBMYXlvdXQLVGVzdCBMYXlvdXQXV2FsdG9uIEFydHMgQ2VudGVyIElkZWEUV29yZEZseSBGb3J3YXJkIEZvcm0UV29yZEZseSBOZXdzbGV0d' + '\n' +
		'GVyIEEZV29yZEZseSBOZXdzbGV0dGVyIEEgQ29weRRXb3JkRmx5IE5ld3NsZXR0ZXIgQhRXb3JkRmx5IE5ld3NsZXR0ZXIgQxRXb3JkRmx5IE' + '\n' +
		'5ld3NsZXR0ZXIgRBRXb3JkRmx5IE5ld3NsZXR0ZXIgRRRXb3JkRmx5IE5ld3NsZXR0ZXIgRhRXb3JkRmx5IE5ld3NsZXR0ZXIgRxJXb3JkRmx' + '\n' +
		'5IFBvc3RjYXJkIEESV29yZEZseSBQb3N0Y2FyZCBCEldvcmRGbHkgUG9zdGNhcmQgQxJXb3JkRmx5IFBvc3RjYXJkIEQSV29yZEZseSBQb3N0' + '\n' +
		'Y2FyZCBFE1dvcmRGbHkgVW5zdWJzY3JpYmUGemVybyA0Bnplcm8gNRUoJGVjM2YyOGU2LTM5MmQtZGYxMS1hODhlLTAwNTA1NjkzMjQzOCQ5N' + '\n' +
		'jkwYTcwMC02NTA0LWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgkYjZhZmNjYjQtZjUzMi1kZjExLWE4OGUtMDA1MDU2OTMyNDM4JDNhY2QxOTNjLT' + '\n' +
		'k3ODQtZGYxMS1hODhlLTAwNTA1NjkzMjQzOCRhY2FkMzgzMi04MGJiLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzgkMTQ5MWQ2ZGYtNThiZi1kZjE' + '\n' +
		'xLTkwYWEtMDA1MDU2OTMyNDM4JDYwYWI3MzI4LWI4YTAtZGYxMS05MGFhLTAwNTA1NjkzMjQzOCRkNmIzYjY3Mi0wNGIyLWRmMTEtOTBhYS0w' + '\n' +
		'MDUwNTY5MzI0MzgkMTJmNjE5OWYtN2NkOC1kZjExLWJjYzUtMDA1MDU2YmEwNDg4JDE0ODAwOTEwLTUwNGUtZGYxMS1hODhlLTAwNTA1NjkzM' + '\n' +
		'jQzOCRmMmIwZDA0Mi01NjRlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgkOWNjOWMwMjUtZmM1ZC1kZjExLWE4OGUtMDA1MDU2OTMyNDM4JDBlOD' + '\n' +
		'E3NWU3LWVkMWMtZGYxMS1hODhlLTAwNTA1NjkzMjQzOCQxNjM5YTliNi0wM2IyLWRmMTEtOTBhYS0wMDUwNTY5MzI0MzgkNzYwNmQzMWItNzR' + '\n' +
		'kYS1kZjExLWJjYzUtMDA1MDU2YmEwNDg4JDU4NzVjYzExLTNhMDItZGYxMS1hODhlLTAwNTA1NjkzMjQzOCQ1NGViMzJmZC04ODAzLWRmMTEt' + '\n' +
		'YTg4ZS0wMDUwNTY5MzI0MzgkNjJkZGEyOWMtYzY0Mi1kZjExLWE4OGUtMDA1MDU2OTMyNDM4JDJlMThjZjA2LTYzYmUtZGUxMS1hODhlLTAwN' + '\n' +
		'TA1NjkzMjQzOCRhMDNjOTdhNi01ODEwLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgkMDRiMmE1MjUtZmQ5Zi1kZjExLTkwYWEtMDA1MDU2OTMyND' + '\n' +
		'M4JDEyMzNmM2Q5LWVlOWYtZGYxMS05MGFhLTAwNTA1NjkzMjQzOCQxYzAwZGJlZC0wNThlLWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgkNjY0YTB' + '\n' +
		'lOWItMDFiOS1kZTExLWJlN2MtMDA1MDU2YmEwNDg4JGYxNTJiODE3LTk4YmEtZGUxMS1iZTdjLTAwNTA1NmJhMDQ4OCRmNDU4NTk0ZC1mYTVk' + '\n' +
		'LWRmMTEtYTg4ZS0wMDUwNTY5MzI0MzgkZmZiODMyNTktYTdiYS1kZTExLWJlN2MtMDA1MDU2YmEwNDg4JDc3ZjUxYTY1LWFhYmEtZGUxMS1iZ' + '\n' +
		'TdjLTAwNTA1NmJhMDQ4OCQwMDZiYWYzOS0yN2JjLWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODgkMjQ4ZWVlOWQtYzhiYy1kZTExLWJlN2MtMDA1MD' + '\n' +
		'U2YmEwNDg4JDc4MTZhNDA1LWNhYmMtZGUxMS1iZTdjLTAwNTA1NmJhMDQ4OCRhYTA5NzQ5MS0wMWI5LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODg' + '\n' +
		'kYjZkMjgyMmItNDNiOC1kZTExLWJlN2MtMDA1MDU2YmEwNDg4JDFlZDBhZmFhLWY5YjgtZGUxMS1iZTdjLTAwNTA1NmJhMDQ4OCRlMjk0MGRi' + '\n' +
		'NS1mOWI4LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODgkMjIwYmMzYmYtMDBiOS1kZTExLWJlN2MtMDA1MDU2YmEwNDg4JDJhZWRkZWM4LTAwYjktZ' + '\n' +
		'GUxMS1iZTdjLTAwNTA1NmJhMDQ4OCQ3ZTliMThhNS0wMWI5LWRlMTEtYmU3Yy0wMDUwNTZiYTA0ODgkMzA4ZTI3NmYtMDhiMi1kZjExLTkwYW' + '\n' +
		'EtMDA1MDU2OTMyNDM4JGI2MGViYmM1LTBkYjItZGYxMS05MGFhLTAwNTA1NjkzMjQzOBQrAyhnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2d' + '\n' +
		'nZ2dnZ2dnZ2dnZ2dnZGQCFw8WAh8EBRtjdGwwMCRjcGhfYm9keSRidG5fY29udGludWVkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tL' + '\n' +
		'ZXlfXxYeBSljdGwwMCRDdXN0b21Mb2dpblN0YXR1cyRMb2dpblN0YXR1cyRjdGwwMQUpY3RsMDAkQ3VzdG9tTG9naW5TdGF0dXMkTG9naW5Td' + '\n' +
		'GF0dXMkY3RsMDMFK2N0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwwMCRjYl9zZWxlY3RBbGwFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZC' + '\n' +
		'RjdGwwMSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwwMiRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWd' + '\n' +
		'lZCRjdGwwMyRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwwNCRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9w' + '\n' +
		'YWdlZCRjdGwwNSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwwNiRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwd' + '\n' +
		'F9wYWdlZCRjdGwwNyRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwwOCRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JH' + '\n' +
		'JwdF9wYWdlZCRjdGwwOSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxMCRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R' + '\n' +
		'5JHJwdF9wYWdlZCRjdGwxMSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxMiRjYl9zZWxlY3QFKGN0bDAwJGNwaF9i' + '\n' +
		'b2R5JHJwdF9wYWdlZCRjdGwxMyRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxNCRjYl9zZWxlY3QFKGN0bDAwJGNwa' + '\n' +
		'F9ib2R5JHJwdF9wYWdlZCRjdGwxNSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxNiRjYl9zZWxlY3QFKGN0bDAwJG' + '\n' +
		'NwaF9ib2R5JHJwdF9wYWdlZCRjdGwxNyRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxOCRjYl9zZWxlY3QFKGN0bDA' + '\n' +
		'wJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwxOSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyMCRjYl9zZWxlY3QFKGN0' + '\n' +
		'bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyMSRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyMiRjYl9zZWxlY3QFK' + '\n' +
		'GN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyMyRjYl9zZWxlY3QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyNCRjYl9zZWxlY3' + '\n' +
		'QFKGN0bDAwJGNwaF9ib2R5JHJwdF9wYWdlZCRjdGwyNSRjYl9zZWxlY3QFF2N0bDAwJExvZ2luU3RhdHVzJGN0bDAxBRdjdGwwMCRMb2dpblN' + '\n' +
		'0YXR1cyRjdGwwMxZ9WHKIb1CNAPfzW66GqRp3HPvy" />'
	]
});

tips.push({
	author: 'blakems',
	message: 'Using <em>non-standard</em> HTML to layout a web page is ideal',
	example: [
		'<spacer width=180 height=30>'
	]
});

tips.push({
	author: 'vocino',
	message: 'Every single tag gets an ID or class, because <em>how else</em> would you style it?',
	example: [
		'<div id="news" class="newsdiv">',
		'   <h2 class="newsdivheading">News</h2>',
		'   <p class="newsparagraph">',
		'      <em class="em">...</em>',
		'   </p>',
		'</div>'
	]
});

tips.push({
	author: 'damncabbage',
	message: 'Creating forms without the need for cumbersome <em>label elements</em>',
	example: [
		'<input type="radio" value="0" name="mf_unique">',
		'<a onclick="document.forms.objeditform.mf_unique[0].click();" href="javascript:void(\'\')">No</a>',
		'<input type="radio" value="1" name="mf_unique">',
		'<a onclick="document.forms.objeditform.mf_unique[1].click();" href="javascript:void(\'\')">Yes</a>'
	]
});

tips.push({
	author: 'damncabbage',
	message: 'Ignoring the <em>Standards Weenies</em> who complain about mixing inline and block elements at will',
	example: [
		'<p>',
		'  <div class="about-us-staff">',
		'    <div><img src="staff/sam.gif" /></div>',
		'    <strong>Sam</strong><br />',
		'    Evaluates cross-platform revenue generation markets for engaging dynamic deliverables.',
		'    </div>',
		'  </div>',
		'</p>'
	]
});

tips.push({
	author: 'damncabbage',
	message: 'Using jQuery to write <em>gracefully degrading</em> javascript that doesn\'t',
	example: [
		'<a href="#2087" class="cs-link">',
		'	<img src="thumb.png" />',
		'	<span><strong>Click Here</strong></span>',
		'</a>'
	]
});

module.exports = tips;
