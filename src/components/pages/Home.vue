<template>
    <div>
      <panel id="about">
        <AboutPanel />
      </panel>
      <panel id="quote">
        <QuotePanel />
      </panel>
      <panel id="uses">
        <UsesPanel />
      </panel>
    </div>
</template>

<script>
import AboutPanel from '../panels/PanelAbout.vue';
import QuotePanel from '../panels/PanelQuote.vue';
import UsesPanel from '../panels/PanelUses.vue';

export default {
  metaInfo: {
    titleTemplate: null
  },
  components: {
    AboutPanel,
    QuotePanel,
    UsesPanel
  }
}
</script>