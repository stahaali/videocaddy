"use client";

import { useState } from "react";
import Container from "@/components/shared/Container/Container";
import styles from "./TrialForm.module.css";

function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function TrialForm() {
  const [captcha, setCaptcha] = useState(generateCaptcha);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <section className={`${styles.section} spacing-section`} aria-labelledby="trial-title">
      <Container>
        <div className={styles.row}>
          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <p className={styles.formTitle}>
                <span id="trial-title">GET A FREE TRIAL</span>
              </p>

              <div className={styles.groupRow}>
                <div className={styles.formBox}>
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="First Name*"
                    required
                    aria-label="First Name"
                  />
                </div>
                <div className={styles.formBox}>
                  <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name*"
                    required
                    aria-label="Last Name"
                  />
                </div>
              </div>

              <div className={styles.groupRow}>
                <div className={styles.formBox}>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Work Email*"
                    required
                    aria-label="Work Email"
                  />
                </div>
                <div className={styles.formBox}>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Work Phone Number"
                    required
                    aria-label="Work Phone Number"
                  />
                </div>
              </div>

              <div className={styles.formBoxLast}>
                <textarea
                  name="description"
                  cols={30}
                  rows={10}
                  placeholder="Please Describe Your Needs*"
                  required
                  aria-label="Please Describe Your Needs"
                />
              </div>

              <div className={styles.groupRow}>
                <div className={styles.formBox}>
                  <input
                    type="text"
                    name="captcha_number"
                    maxLength={4}
                    placeholder="Enter the Captcha"
                    required
                    aria-label="Enter the Captcha"
                  />
                </div>
                <div className={`${styles.formBox} ${styles.captchaBox}`}>
                  <span className={styles.captchaImage} aria-hidden="true">
                    {captcha}
                  </span>
                  <button
                    type="button"
                    className={styles.captchaRefresh}
                    onClick={refreshCaptcha}
                    aria-label="Refresh Captcha"
                  >
                    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                      <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.3 96.9c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c58.1-58.1 151-63.2 214.6-15.4L336 161.7c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.checkBox}>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.rightContent}>
              <h2>Empower your brand WITH expert video editing services</h2>
              <p>
                Choose Video Caddy, India&apos;s premier video editing agency, for a seamless
                and lucrative outstanding partnership!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
