<template>
    <div class="container">
        <Section
            title="Kestra - Empowering Data-Driven Success 🙌"
        >
        <p class="text-center" data-aos="fade-right">
            Kestra's Change Data Capture capabilities enhance data management by enabling efficient data synchronization and processing. With Kestra's event-driven triggers, visual pipeline editor, and extensive integrations, businesses can maintain up-to-date data across their systems, leading to timely insights and better decision-making. Experience the benefits of Kestra's CDC solution and transform your data management processes today.
        </p>
        <div class="text-center cta">
                <NuxtLink href="/docs/getting-started" class="btn btn-lg btn-secondary" data-aos="zoom-in">
                    Get started
                </NuxtLink>
            </div>
        </Section>
    </div>
</template>

<script>
    import Section from '../../components/layout/Section.vue';

    export default {
        components: {Section}
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .container {
        background: $light-cyan;
        color: var(--bs-black);
        padding-left: calc($spacer * 4);
        padding-right: calc($spacer * 4);
        margin-bottom: calc($spacer * 2);
        border-radius: 10px;

        :deep(p.baseline) {
            color: var(--bs-black);
        }
    }
</style>