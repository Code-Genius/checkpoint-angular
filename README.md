# Review Week Angular Assessment

## Logistics

- You have 2 hours. This test was designed to be difficult to finish. Get through as much as you can, and if you get stuck on any spec, try moving on—they're not all cumulative.
- You may use online resources or notes, but *not* any previous code you've written, nor may you copy/paste from code online.

## Getting started

- fork this repo then clone your fork locally
- `npm install` and `bower install`
- `npm test` (which starts up testem)
- open up localhost:7357 for a better UI for the spec results
- start going through the specs
- you should only need to edit these files
	- browser/app/todos/todo.factory.js
	- browser/app/todos/list/todo.list.controller.js
	- browser/app/todos/list/todo.list.state.js
	- browser/app/todos/item/todo.item.directive.js
	- browser/app/todos/item/todo.controller.js
	- browser/app/todos/detail/todo.detail.controller.js
	- browser/app/todos/detail/todo.detail.state.js
	- browser/app/todos/edit/todo.edit.controller.js
	- browser/app/todos/edit/todo.edit.state.js
	- browser/utils/ng-enter.directive.js

## Submitting

- `git add -A`
- `git commit -m "Submission for deadline"`
- `git push origin master`
- zip up the folder and email to instructors@fullstackacademy.com

## Things you should be aware of

- You can run `npm start` to fire up a server. Use this if you want to get a sense of what your app actually looks and feels like as you're passing the specs. If so, you can also seed the database with `npm run seed`.
- We think you're swell, so try to just relax and do what you can.

< g o o d  l u c k 3