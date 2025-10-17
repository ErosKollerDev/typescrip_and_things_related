import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('pieCanvas', { static: true }) pieCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barCanvas', { static: true }) barCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineCanvas', { static: true }) lineCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('scatterCanvas', { static: true }) scatterCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('bubbleCanvas', { static: true }) bubbleCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('areaCanvas', { static: true }) areaCanvasRef!: ElementRef<HTMLCanvasElement>;

  // Sample data
  pieData = [35, 25, 20, 12, 8];
  pieColors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336'];
  pieLabels = ['Search', 'Direct', 'Referral', 'Social', 'Email'];

  barLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  barData = [12, 19, 8, 17, 23, 28];
  barColor = '#42A5F5';

  lineLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineData = [120, 132, 101, 134, 90, 230, 210];
  lineColor = '#66BB6A';

  // Scatter and Bubble sample data
  scatterPoints: { x: number; y: number }[] = [
    { x: 5, y: 20 }, { x: 15, y: 35 }, { x: 25, y: 18 }, { x: 35, y: 42 }, { x: 45, y: 28 },
    { x: 55, y: 48 }, { x: 65, y: 30 }, { x: 75, y: 55 }, { x: 85, y: 38 }
  ];
  scatterColor = '#EF5350';

  bubblePoints: { x: number; y: number; r: number }[] = [
    { x: 10, y: 12, r: 8 }, { x: 20, y: 35, r: 14 }, { x: 30, y: 22, r: 10 },
    { x: 40, y: 50, r: 18 }, { x: 60, y: 32, r: 12 }, { x: 80, y: 45, r: 16 }
  ];
  bubbleColor = '#AB47BC';

  // Area chart data
  areaLabels = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];
  areaData = [220, 260, 180, 300, 280, 340];
  areaColor = '#29B6F6';

  get pieLegend() {
    return this.pieLabels.map((label, i) => ({ label, color: this.pieColors[i % this.pieColors.length], value: this.pieData[i] }));
  }

  constructor(private router: Router, private auth: AuthService) {}

  ngAfterViewInit(): void {
    this.redrawAll();
  }

  @HostListener('window:resize')
  onResize() {
    this.redrawAll();
  }

  private redrawAll() {
    this.fitCanvas(this.pieCanvasRef.nativeElement);
    this.fitCanvas(this.barCanvasRef.nativeElement);
    this.fitCanvas(this.lineCanvasRef.nativeElement);
    this.fitCanvas(this.scatterCanvasRef.nativeElement);
    this.fitCanvas(this.bubbleCanvasRef.nativeElement);
    this.fitCanvas(this.areaCanvasRef.nativeElement);

    this.drawPieChart();
    this.drawBarChart();
    this.drawLineChart();
    this.drawScatterChart();
    this.drawBubbleChart();
    this.drawAreaChart();
  }

  private fitCanvas(canvas: HTMLCanvasElement) {
    // Make canvas crisp on HiDPI displays
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  }

  private getCtx(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not available');
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale for crisp drawing
    return ctx;
  }

  private drawPieChart() {
    const canvas = this.pieCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const total = this.pieData.reduce((a, b) => a + b, 0);
    const cx = w / 2; // center
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.35;

    let startAngle = -Math.PI / 2; // start at top
    this.pieData.forEach((value, i) => {
      const angle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, startAngle + angle);
      ctx.closePath();
      ctx.fillStyle = this.pieColors[i % this.pieColors.length];
      ctx.fill();

      // label
      const mid = startAngle + angle / 2;
      const lx = cx + Math.cos(mid) * (radius + 12);
      const ly = cy + Math.sin(mid) * (radius + 12);
      ctx.fillStyle = '#333';
      ctx.font = '12px sans-serif';
      const percent = Math.round((value / total) * 100);
      ctx.fillText(`${percent}%`, lx - 10, ly + 4);

      startAngle += angle;
    });
  }

  private drawBarChart() {
    const canvas = this.barCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 10, right: 16, bottom: 24, left: 28 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // axes
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    const maxValue = Math.max(...this.barData) * 1.15;
    const barCount = this.barData.length;
    const barWidth = chartW / (barCount * 1.6);
    const gap = (chartW - barWidth * barCount) / (barCount - 1);

    ctx.fillStyle = this.barColor;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';

    this.barData.forEach((v, i) => {
      const x = padding.left + i * (barWidth + gap);
      const hVal = (v / maxValue) * chartH;
      const y = padding.top + chartH - hVal;
      ctx.fillRect(x, y, barWidth, hVal);

      // labels
      ctx.fillStyle = '#555';
      ctx.fillText(this.barLabels[i], x + barWidth / 2, padding.top + chartH + 16);
      ctx.fillStyle = this.barColor;
    });
  }

  private drawLineChart() {
    const canvas = this.lineCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 10, right: 16, bottom: 24, left: 32 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // grid lines
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 1;
    const gridLines = 4;
    for (let i = 0; i <= gridLines; i++) {
      const y = padding.top + (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();
    }

    const maxVal = Math.max(...this.lineData) * 1.15;
    const stepX = chartW / (this.lineData.length - 1);

    // axis
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    // line
    ctx.strokeStyle = this.lineColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    this.lineData.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (v / maxVal) * chartH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // points
    ctx.fillStyle = this.lineColor;
    this.lineData.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (v / maxVal) * chartH;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // labels
    ctx.fillStyle = '#555';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    this.lineLabels.forEach((lbl, i) => {
      const x = padding.left + i * stepX;
      ctx.fillText(lbl, x, padding.top + chartH + 16);
    });
  }

  private drawScatterChart() {
    const canvas = this.scatterCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 10, right: 16, bottom: 24, left: 32 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const xs = this.scatterPoints.map(p => p.x);
    const ys = this.scatterPoints.map(p => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const xScale = (x: number) => padding.left + ((x - minX) / (maxX - minX || 1)) * chartW;
    const yScale = (y: number) => padding.top + chartH - ((y - minY) / (maxY - minY || 1)) * chartH;

    // axes
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    // points
    ctx.fillStyle = this.scatterColor;
    this.scatterPoints.forEach(p => {
      const x = xScale(p.x);
      const y = yScale(p.y);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  private drawBubbleChart() {
    const canvas = this.bubbleCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 10, right: 16, bottom: 24, left: 32 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const xs = this.bubblePoints.map(p => p.x);
    const ys = this.bubblePoints.map(p => p.y);
    const rs = this.bubblePoints.map(p => p.r);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const maxR = Math.max(...rs);

    const xScale = (x: number) => padding.left + ((x - minX) / (maxX - minX || 1)) * chartW;
    const yScale = (y: number) => padding.top + chartH - ((y - minY) / (maxY - minY || 1)) * chartH;
    const rScale = (r: number) => 6 + (r / (maxR || 1)) * 12; // 6..18 px

    // axes
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    // bubbles
    this.bubblePoints.forEach(p => {
      const x = xScale(p.x);
      const y = yScale(p.y);
      const r = rScale(p.r);
      ctx.beginPath();
      ctx.fillStyle = this.bubbleColor + '33'; // translucent fill
      ctx.strokeStyle = this.bubbleColor;
      ctx.lineWidth = 1.5;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  }

  private drawAreaChart() {
    const canvas = this.areaCanvasRef.nativeElement;
    const ctx = this.getCtx(canvas);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 10, right: 16, bottom: 24, left: 32 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // grid lines
    ctx.strokeStyle = '#eee';
    ctx.lineWidth = 1;
    const gridLines = 4;
    for (let i = 0; i <= gridLines; i++) {
      const y = padding.top + (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();
    }

    const maxVal = Math.max(...this.areaData) * 1.15;
    const stepX = chartW / (this.areaData.length - 1);

    // axis
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.stroke();

    // area fill
    ctx.beginPath();
    this.areaData.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (v / maxVal) * chartH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    // close to x-axis
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.lineTo(padding.left, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = this.areaColor + '33';
    ctx.fill();

    // top line
    ctx.strokeStyle = this.areaColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    this.areaData.forEach((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (v / maxVal) * chartH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // labels
    ctx.fillStyle = '#555';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    this.areaLabels.forEach((lbl, i) => {
      const x = padding.left + i * stepX;
      ctx.fillText(lbl, x, padding.top + chartH + 16);
    });
  }

  logoff() {
    this.auth.clear();
    this.router.navigateByUrl('/login');
  }
}
