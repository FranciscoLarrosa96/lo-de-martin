import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected submitted = signal(false);
  protected submitSuccess = signal(false);

  protected readonly guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  protected readonly hours = [
    { days: 'Martes — Jueves', time: '20:00 — 00:00' },
    { days: 'Viernes — Sábado', time: '20:00 — 01:00' },
    { days: 'Domingo', time: '12:30 — 16:00' },
    { days: 'Lunes', time: 'Cerrado' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    date: ['', Validators.required],
    guests: [2, Validators.required],
    requirements: [''],
  });

  protected get fc() {
    return this.form.controls;
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    // In a real app, call a service here
    this.submitSuccess.set(true);
    this.form.reset({ guests: 2 });
    this.submitted.set(false);
  }
}
