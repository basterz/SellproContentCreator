import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';
import { CoreComponent } from './core/core.component';
import { SidenavComponent } from './sections/sidenav/sidenav.component';
import { EditorComponent } from './editor.component';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabeledGraphicComponent } from './controls/sp-control/labeled-graphic/labeled-graphic.component';
import { PdfComponent } from './controls/sp-control/pdf/pdf.component';
import { TextComponent } from './controls/sp-control/text/text.component';
import { DynamicControlDirective } from './core/dynamic-control.directive';
import { DynamicControlComponent } from './controls/dynamic-control/dynamic-control.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './controls/settings/settings.component';
import { PreviewComponent } from './controls/preview/preview.component';
import { PdfPreviewComponent } from './controls/preview/pdf-preview/pdf-preview.component';
import { TextPreviewComponent } from './controls/preview/text-preview/text-preview.component';
import { LabeledGraphicPreviewComponent } from './controls/preview/labeled-graphic-preview/labeled-graphic-preview.component';
import { ImagePreviewComponent } from './controls/preview/image-preview/image-preview.component';
import { TextSettingsComponent } from './controls/settings/text-settings/text-settings.component';
import { ImageSettingsComponent } from './controls/settings/image-settings/image-settings.component';
import { PdfSettingsComponent } from './controls/settings/pdf-settings/pdf-settings.component';
import { ImageComponent } from './controls/sp-control/image-control/image.component';
import { ControlComponent } from './controls/sp-control/control.component';
import { LabeledGraphicSettingsComponent } from './controls/settings/labeled-graphic-settings/labeled-graphic-settings.component';
import { DynamicSettingsControlComponent } from './controls/dynamic-settings-control/dynamic-settings-control.component';
import { DynamicPreviewControlComponent } from './controls/dynamic-preview-control/dynamic-preview-control.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
let EditorModule = class EditorModule {
};
EditorModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            CommonModule,
            EditorRoutingModule,
            MatToolbarModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            DragDropModule,
            MatListModule,
            FlexLayoutModule,
            MatCardModule,
            MatGridListModule,
            MatTooltipModule,
            FormsModule,
            CKEditorModule,
            NgxPageScrollCoreModule,
            HttpClientModule,
        ],
        exports: [
            SidenavComponent,
        ],
        entryComponents: [
            ControlComponent,
            ImageComponent,
            TextComponent,
            PdfComponent,
            LabeledGraphicComponent,
            DynamicControlComponent,
            DynamicSettingsControlComponent,
            DynamicPreviewControlComponent,
            TextSettingsComponent,
            ImageSettingsComponent,
            PdfSettingsComponent,
            LabeledGraphicSettingsComponent,
            ImagePreviewComponent,
            TextPreviewComponent,
            PdfPreviewComponent,
            LabeledGraphicPreviewComponent,
        ],
        declarations: [
            CoreComponent,
            SidenavComponent,
            EditorComponent,
            ControlComponent,
            ImageComponent,
            LabeledGraphicComponent,
            PdfComponent,
            TextComponent,
            DynamicControlDirective,
            DynamicControlComponent,
            SettingsComponent,
            PreviewComponent,
            SettingsComponent,
            PdfPreviewComponent,
            TextPreviewComponent,
            LabeledGraphicPreviewComponent,
            ImagePreviewComponent,
            TextSettingsComponent,
            ImageSettingsComponent,
            PdfSettingsComponent,
            LabeledGraphicSettingsComponent,
            DynamicSettingsControlComponent,
            DynamicPreviewControlComponent,
            SafePipe
        ]
    })
], EditorModule);
export { EditorModule };
//# sourceMappingURL=editor.module.js.map