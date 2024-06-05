import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input()
  public tooltipContent: string = '';
  private tooltipHTMLElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.tooltipHTMLElement = this.createToolTip();
    this.renderer.appendChild(this.el.nativeElement, this.tooltipHTMLElement);
    console.log('Mouse In');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipHTMLElement);
    console.log('Mouse Out');
  }

  private createToolTip(): HTMLElement {
    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipContent);
    this.renderer.appendChild(tooltip, text);
    this.renderer.addClass(tooltip, 'tooltip');
    return tooltip;
  }

}
