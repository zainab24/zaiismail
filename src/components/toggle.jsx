import * as React from "react";

export const Toggle = React.forwardRef(
    ({ label, value, onChange, }, forwardedRef) => {
      const [checked, setChecked] = React.useState(defaultChecked);
  
      useEffect(() => {
        if (onChange) {
          onChange(checked);
    
          const body = document.body;
        
        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if( checked === true ) {
          body.classList.add('dark-mode')
        } else {
          body.classList.remove('dark-mode')
        }
    
        }
      }, [checked]);
      
      return (
        <input type="checkbox" id="theme-toggle" checked={checked} onChange={e => {
            setChecked(e.target.checked);
          }} />
      );
    }
  );
