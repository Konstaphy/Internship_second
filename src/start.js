//styles
import './styles.scss'
import 'material-icons/iconfont/material-icons.css';

//js
// components
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./elements', true, /\.js$/));
requireAll(require.context('./components', true, /\.js$/));
requireAll(require.context('./elements', true, /\.scss$/));
requireAll(require.context('./components', true, /\.scss$/));





