export default class ScrollEvent {
    static addOverlay(): void {
        document.body.classList.add('overflow-y-hidden');
    }

    static hideOverlay(): void {
        document.body.classList.remove('overflow-y-hidden');
    }

}

