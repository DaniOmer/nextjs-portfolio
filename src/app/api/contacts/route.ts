import { NextRequest, NextResponse } from "next/server";
import { NotificationModule } from "@/modules/notification/notification.composition";
import { getEmailTemplate } from "@/lib/utils";
import {
  NotificationMode,
  NotificationStatus,
} from "@/modules/notification/domain/notification.types";
import { serviceTypes } from "@/data/services";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const htmlContent = getEmailTemplate(body.templateName, body.data);
    const createNotificationUseCase =
      await NotificationModule.createNotificationUseCase();
    const notification = {
      name: "Portfolio - Omer DOTCHAMOU",
      subject: serviceTypes.find((s) => s.value === body.data.type)?.label,
      sender: "ddaniomer95@gmail.com",
      mode: NotificationMode.EMAIL,
      target: body.data.email,
      status: NotificationStatus.PENDING,
      retryCount: 0,
      template: htmlContent,
    };
    const result = await createNotificationUseCase.execute(notification);
    return NextResponse.json({ success: true, notification: result });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message || "Internal Server Error",
        details: err.errors || undefined,
      },
      { status: err.statusCode || 500 }
    );
  }
}
