import { em, px, translateY } from 'csx';
import { stylesheet } from 'typestyle';

export const css = stylesheet({
  button: {
    backgroundColor: '#5851ff',
    color: 'white',
    margin: px(8),
    border: 'none',
    fontSize: px(13),
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: [ px(16), px(20) ],
    borderRadius: px(2),
    boxShadow: '0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08)',
    outline: 0,
    letterSpacing: em(0.04),
    transition: 'all .15s ease',
    cursor: 'pointer',
    $nest: {
      '&:hover': {
        boxShadow: '0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1)',
        transform: translateY(px(1))
      }
    }
  }
});
