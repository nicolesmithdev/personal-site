<template>
    <div>
        <panel v-for="panel in panels" :key="panel" :id="panel.toLowerCase()">
            <component :is="panel + 'Panel'" />
        </panel>
    </div>
</template>

<script>
import AboutPanel from '../panels/PanelAbout';
import SkillsPanel from '../panels/PanelSkills';
import QuotePanel from '../panels/PanelQuote';
import UsesPanel from '../panels/PanelUses';

export default {
    metaInfo: {
        titleTemplate: null,
    },
    components: {
        AboutPanel,
        SkillsPanel,
        QuotePanel,
        UsesPanel,
    },
    data() {
        return {
            panels: ['About', 'Skills', 'Quote', 'Uses'],
        };
    },
};
</script>
