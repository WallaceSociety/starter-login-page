<script lang="ts">
  import { getInputStyles, getLabelStyles, inputWrapperStyles } from '../lib/styles/input';
  import type { Size } from '../lib/types';
  
  export let id: string;
  export let label: string;
  export let type: string = 'text';
  export let value: string = '';
  export let required: boolean = false;
  export let size: Size = 'md';
  export let additionalClasses: string = '';
</script>

<div>
  <label for={id} class={getLabelStyles(size)}>
    {label}
  </label>
  <div class={inputWrapperStyles}>
    <input
      {id}
      {type}
      bind:value
      {required}
      class={`${getInputStyles(size)} ${additionalClasses}`}
    />
  </div>
</div>