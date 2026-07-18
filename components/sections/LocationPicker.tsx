'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  LoaderCircle,
  MapPin,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { buildWhatsAppLink } from '@/lib/utils';
import type { MarkerPosition } from './MapComponent';

const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[450px] items-center justify-center bg-primary-50">
      <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
    </div>
  ),
});

interface OrderForm {
  name: string;
  phone: string;
  service: string;
  notes: string;
}

export default function LocationPicker() {
  const [marker, setMarker] = useState<MarkerPosition | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>();

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('خدمة تحديد الموقع غير متوفرة في جهازك');
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoadingLocation(false);
      },
      () => {
        alert(
          'تعذر تحديد موقعك. يرجى السماح بالوصول إلى الموقع أو تحديده يدوياً على الخريطة.'
        );
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  const onSubmit = (data: OrderForm) => {
    if (!marker) {
      alert('يرجى تحديد موقعك على الخريطة أولاً');
      return;
    }

    const googleMapsLink =
      `https://www.google.com/maps?q=${marker.lat},${marker.lng}`;

    const osmLink =
      `https://www.openstreetmap.org/?mlat=${marker.lat}&mlon=${marker.lng}#map=17/${marker.lat}/${marker.lng}`;

    const message = `🌊 طلب جديد - العصيمي للمياه

👤 الاسم: ${data.name}
📱 الجوال: ${data.phone}
💧 الخدمة: ${data.service}
📝 الملاحظات: ${data.notes || 'لا توجد'}

📍 الموقع:
${googleMapsLink}

🗺️ رابط OpenStreetMap:
${osmLink}`;

    window.open(
      buildWhatsAppLink(message),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="order" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-primary-50 px-5 py-2 font-bold text-primary">
            اطلب الآن
          </span>

          <h2 className="text-gradient mt-6 text-4xl font-black md:text-5xl">
            حدد موقعك واطلب فوراً
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            اضغط على الخريطة لتحديد موقعك بدقة
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl">
              <MapComponent
                marker={marker}
                setMarker={setMarker}
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={useCurrentLocation}
                disabled={loadingLocation}
                className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-secondary px-5 font-black text-white shadow-lg disabled:opacity-60"
              >
                {loadingLocation ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Navigation />
                )}
                استخدم موقعي الحالي
              </button>

              {marker && (
                <div className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-green-100 px-5 font-black text-green-700">
                  <MapPin />
                  تم تحديد الموقع ✓
                </div>
              )}
            </div>

            {marker && (
              <div className="mt-4 rounded-xl bg-primary-50 p-3 text-center text-sm text-primary">
                الإحداثيات: {marker.lat.toFixed(6)} ،{' '}
                {marker.lng.toFixed(6)}
              </div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="gradient-blue rounded-3xl p-7 text-white shadow-2xl md:p-10"
          >
            <h3 className="mb-7 text-3xl font-black">
              📋 تفاصيل الطلب
            </h3>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block font-bold">
                  الاسم الكامل
                </label>
                <input
                  {...register('name', {
                    required: 'يرجى إدخال الاسم',
                  })}
                  className="min-h-14 w-full rounded-xl border-0 px-4 text-primary outline-none focus:ring-4 focus:ring-white/50"
                  placeholder="أدخل اسمك"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-yellow-200">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'يرجى إدخال رقم الجوال',
                    minLength: {
                      value: 9,
                      message: 'رقم الجوال غير صحيح',
                    },
                  })}
                  className="min-h-14 w-full rounded-xl border-0 px-4 text-primary outline-none focus:ring-4 focus:ring-white/50"
                  placeholder="مثال: 777123456"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-yellow-200">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  نوع الخدمة
                </label>

                <select
                  {...register('service', {
                    required: 'يرجى اختيار الخدمة',
                  })}
                  className="min-h-14 w-full rounded-xl border-0 px-4 text-primary outline-none focus:ring-4 focus:ring-white/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    اختر الخدمة
                  </option>
                  <option value="وايت صغير 2000 لتر">
                    وايت صغير 2000 لتر 🚛
                  </option>
                  <option value="وايت متوسط 4000 لتر">
                    وايت متوسط 4000 لتر 🚛
                  </option>
                  <option value="وايت كبير 8000 لتر">
                    وايت كبير 8000 لتر 🚛
                  </option>
                  <option value="مشروع مياه منزلي">
                    مشروع مياه منزلي 🏠
                  </option>
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-yellow-200">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-bold">
                  ملاحظات إضافية
                </label>

                <textarea
                  {...register('notes')}
                  rows={4}
                  className="w-full rounded-xl border-0 p-4 text-primary outline-none focus:ring-4 focus:ring-white/50"
                  placeholder="أضف أي تفاصيل أخرى..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-whatsapp px-6 text-lg font-black text-white shadow-2xl"
              >
                <MessageCircle />
                إرسال الطلب عبر واتساب
              </motion.button>

              <p className="text-center text-sm text-white/70">
                🔒 معلوماتك محفوظة ولن يتم استخدامها إلا لتنفيذ طلبك
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
