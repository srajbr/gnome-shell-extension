/**
 Copyright 2013 Samiran Raj Boro (srajbr@gmail.com)
 This file is part of Auto Hide Panel.

 Auto Hide Panel is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Auto Hide Panel is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Remove Accessibility.  If not, see <http://www.gnu.org/licenses/>.
**/

const Main = imports.ui.main;

function init() {
	Main.panel.actor.connect('enter-event', showPanel);
	Main.panel.actor.connect('leave-event', hidePanel);
}

function showPanel() {
	Main.panel.actor.set_height(-1);
	Main.panel.actor.set_anchor_point(0,0);
}

function hidePanel() {
	Main.panel.actor.set_height(1);
	Main.panel.actor.set_anchor_point(0,15);
}

function enable() {
	hidePanel();
}

function disable() {
	showPanel();
}
