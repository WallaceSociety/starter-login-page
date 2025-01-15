<script lang="ts">
  import { getCheckboxStyles, getLabelStyles } from '../lib/styles/input';
  import type { Size } from '../lib/types';
  
  export let id: string;
  export let label: string;
  export let checked: boolean = false;
  export let size: Size = 'md';
</script>

<div class="flex items-center">
  <input
    {id}
    type="checkbox"
    bind:checked
    class={getCheckboxStyles(size)}
  />
  <label for={id} class={`${getLabelStyles(size)} ml-2`}>
    {label}
  </label>
</div>