<template>
  <div id="mainContent">
    <p style="margin-left:12px;">Please enter your name, email address, and any comments, and I will get back to you as soon as I can.</p>
  </div>
  <br />
  <div id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/d74a128f1a2491d0086ce981d8ba22ed?embedded=1"></div>
</template>

<script setup>
import { onMounted } from 'vue';

useHead({ title: 'Contact | Chris Bailey Piano' });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  // Load each script within a Promise so that it completes before loading the next script.
  try {
    await loadScript("https://pym.nprapps.org/pym.v1.min.js");
    await loadScript("https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js");
    console.log("Scripts loaded");
  } catch (e) {
    console.error("Script loading error", e);
  }

  formkeepEmbed.addEventListener('formkeep-embed:submitting', () => {
    console.log('Submitting form...');
  });

  formkeepEmbed.addEventListener('formkeep-embed:submitted', () => {
    console.log('Submitted form...');
  });
});
</script>
