describe('New Arrivals Component Test', function() {
    it('checks if the component has been mounted', async (browser) => {
        const component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
            plugins: {
                router: '/src/lib/router.js'
            }
        });
        expect(component).to.be.present;
        expect(component).to.have.property('newArrivals');
        expect(component).text.toContain('The Memory Police');

        expect.elements('div.col-md-6').count.toEqual(4);
        expect(component.property('newArrivals')).to.be.an('Array').with.length(4);
    });
});