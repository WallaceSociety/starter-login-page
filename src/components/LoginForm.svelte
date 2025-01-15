<script lang="ts">
  import EmailInput from './EmailInput.svelte';
  import PasswordInput from './PasswordInput.svelte';
  import Checkbox from './Checkbox.svelte';
  import type { Size } from '../lib/types';

  export let size: Size = 'md';
  
  let email = '';
  let password = '';
  let rememberMe = false;
  let loading = false;

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    loading = true;
    
    // Add your authentication logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    loading = false;
  }
</script>

<form on:submit={handleSubmit} class="space-y-6 w-full max-w-md">
  <EmailInput
    id="email"
    label="Email address"
    bind:value={email}
    required
    {size}
  />

  <PasswordInput
    id="password"
    label="Password"
    bind:value={password}
    required
    {size}
  />

  <div class="flex items-center justify-between">
    <Checkbox
      id="remember-me"
      label="Remember me"
      bind:checked={rememberMe}
      {size}
    />

    <a href="#" class="text-sm font-medium text-primary hover:text-secondary">
      Forgot your password?
    </a>
  </div>

  <button
    type="submit"
    disabled={loading}
    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? 'Signing in...' : 'Sign in'}
  </button>
</form>