# **🦦** OTTER-WYSIWYG

Otter-wysiwyg is a tiny modular WYSIWYG editor. It acts basically as a Static Site Generator supporting dynamic variables.

<br  /><br  />

## ⭐️ Quick Features :

- Built-in and customizable widgets

- Multi-page support

- Responsive

- Template copy/share support with an encoded string

- Dynamic variables support

- Adobe anchorsCustomizable JSON expoCustomizable JSON export formatt format

- Image formatting

- Text editor

- Dark & Light themes

<br  /><br  /><br  />

# 📄 DOC

<br  />

#### Editor

&lt;OtterEditor&gt; is for rendering.

```javascript
<OtterEditor
customVars: [customVariables],
style: {
	theme: 'light', 'dark',
	font: string,
},
thumbnailPath: string,
customOtterComponents: [oc1, oc2...],
preset: string
onSave: ()=>template
/>
```

<br  /><br  />

#### Render

&lt;OtterRenderer&gt; is for rendering.

```javascript
<OtterRenderer
customVars: [customVariables],
customOtterComponents: [oc1, oc2...],
customOCState: [oc1name: {state}, oc2: {state}...]
template: {template}
/>
```

<br  /><br  />

#### Custom Variables

A custom variable is set as :

```json
{
name: string,
id: string,
example: string
}
```

<br  /><br  />

#### Otter components

Otter works with otter components (OC). Some are built-in but you can also add some.
<br/>
You need to register Otter components custom state and pass it in &lt;OtterEditor&gt;
A typical example for this would be for your editor to contain a timer set to a certain date. You'd need to register the date and pass it in the renderer for it to display correctly.
<br  />

A OC is set as :

```json
{
name: string,
position: 'left'|'middle'|'right' //left,
responsive: none | []('mobile' | 'tablet') //mobile,
height: number | 'auto' //auto,
width: number | 'auto' //auto,
content: 'JSX/React FC',
customVars: []string,
}
```

<br  /><br  />

#### Styling

You can add your own classes to OC's and serve them with your CSS files. CSS inline is supported too
<br  /><br  />

#### What you need

You need a way to save the json template & to pass the correct state for custom vars

<br  /><br  />
<br  />

#### Still WIP, the current scheduled dependances are :

- Mantine (UI & rich text editor & drag'n drop)

- Bootstrap if I'm lazy, else only CSS flex

- TS

- Immer ?

#### TODO thinktank :

- Otter components should be memoized, loaded on demand
- Better way to handle custom OC states

> Thanks to Gaspard Guyot for the name

<br  /><br  />

## HOW TO TEST

  <br  />

##### In Otter:

npm link
node_modules/react -> npm link
npx tsc --watch
<br  />

##### In test project dir :

npm link otter-wysiwyg
npm link react
