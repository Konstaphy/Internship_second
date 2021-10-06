//styles
import './styles.scss'
import 'material-icons/iconfont/material-icons.css';
import Checkbox from "./elements/checkbox-element/checkbox";


//js
// components
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

Checkbox.init('ce1', 'ce2')

requireAll(require.context('./elements', true, /\.js$/));
requireAll(require.context('./components', true, /\.js$/));
requireAll(require.context('./elements', true, /\.scss$/));
requireAll(require.context('./components', true, /\.scss$/));





