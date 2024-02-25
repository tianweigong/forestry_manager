//effect
const pos_x0=[83, 60, 103, 223, 15, 146, 199, 184, 132, 221, 5, 170, 77, 164, 163, 289, 50, 291, 172, 194, 95, 139, 216, 239, 58, 249, 43, 120, 104, 173, 139, 298, 279, 171, 84, 221, 265, 183, 126, 129, 236, 75, 286, 13, 253, 199, 223, 312, 127, 94, 215, 76, 86, 120, 45, 165, 24, 104, 192, 219, 44, 248, 264, 262, 13, 158, 263, 317, 150, 220, 64, 315, 190, 245, 297, 259, 144, 156, 198, 112, 42, 166, 302, 264];
const pos_y0=[271, 215, 160, 86, 99, 289, 216, 244, 139, 309, 195, 195, 69, 42, 155, 108, 65, 174, 102, 63, 37, 228, 266, 167, 188, 213, 134, 298, 196, 316, 58, 143, 209, 275, 231, 15, 55, 5, 24, 254, 113, 104, 252, 165, 261, 120, 45, 200, 181, 125, 185, 151, 298, 99, 262, 72, 222, 66, 160, 235, 93, 295, 119, 88, 135, 126, 152, 163, 10, 145, 37, 120, 32, 29, 79, 186, 318, 250, 288, 232, 163, 223, 229, 236];

const pos_x1=[170, 20, 38, 235, 195, 109, 183, 46, 58, 151, 223, 133, 103, 90, 209, 281, 112, 87, 137, 7, 253, 182, 300, 221, 281, 33, 212, 162, 141, 298, 95, 76, 99, 183, 264, 137, 226, 91, 46, 177, 113, 253, 319, 233, 44, 203, 232, 138, 310, 272, 156, 187, 186, 153, 67, 121, 278, 206, 105, 23, 151, 281, 254, 70, 78, 117, 205, 63, 184, 229, 15, 114, 59, 280, 256, 314, 81, 262, 307, 243, 159, 261, 11, 124];
const pos_y1=[249, 177, 222, 291, 234, 250, 26, 96, 159, 87, 67, 162, 118, 87, 99, 88, 308, 289, 41, 143, 141, 319, 226, 23, 156, 125, 143, 204, 115, 179, 190, 34, 220, 164, 239, 236, 223, 145, 254, 292, 57, 61, 156, 176, 60, 184, 259, 267, 125, 203, 141, 118, 59, 2, 234, 198, 127, 303, 21, 81, 313, 262, 94, 116, 61, 87, 272, 196, 86, 121, 205, 281, 281, 58, 33, 202, 259, 283, 98, 202, 60, 175, 109, 136];

const pos_x2=[57, 214, 17, 86, 191, 254, 19, 100, 180, 248, 98, 166, 37, 129, 315, 166, 156, 107, 312, 156, 219, 221, 142, 39, 60, 219, 126, 233, 44, 283, 55, 62, 113, 139, 170, 168, 120, 256, 81, 263, 240, 298, 125, 110, 276, 73, 86, 169, 96, 211, 271, 96, 206, 197, 169, 288, 193, 10, 142, 152, 188, 33, 312, 47, 65, 250, 205, 255, 255, 221, 61, 191, 309, 87, 279, 179, 129, 184, 139, 236, 14, 2, 288, 78];
const pos_y2=[181, 168, 212, 144, 236, 207, 172, 249, 79, 130, 46, 142, 113, 216, 148, 20, 174, 200, 186, 215, 242, 113, 264, 72, 153, 21, 87, 61, 209, 231, 274, 90, 112, 59, 288, 253, 11, 168, 211, 276, 293, 83, 307, 158, 120, 250, 21, 105, 91, 206, 68, 291, 307, 273, 52, 167, 133, 125, 128, 310, 177, 147, 118, 242, 119, 103, 64, 40, 241, 140, 43, 31, 215, 173, 194, 316, 183, 205, 32, 265, 98, 151, 258, 67];

const pos_x3=[186, 197, 164, 51, 61, 265, 225, 269, 222, 98, 270, 87, 155, 100, 192, 172, 177, 138, 82, 294, 131, 150, 263, 142, 210, 68, 176, 130, 25, 256, 146, 28, 71, 89, 98, 36, 112, 196, 153, 266, 241, 162, 111, 130, 273, 16, 298, 210, 235, 163, 309, 133, 310, 202, 223, 50, 91, 102, 224, 60, 44, 10, 42, 134, 121, 220, 299, 169, 237, 256, 116, 15, 77, 73, 188, 160, 199, 244, 200, 57, 183, 62, 289, 112];
const pos_y3=[290, 246, 266, 162, 38, 156, 139, 79, 67, 71, 121, 185, 126, 307, 110, 165, 26, 182, 117, 216, 298, 38, 218, 213, 173, 80, 63, 239, 138, 268, 79, 104, 228, 26, 275, 205, 135, 209, 320, 189, 101, 238, 199, 14, 245, 227, 88, 307, 246, 100, 152, 270, 192, 45, 214, 274, 155, 228, 26, 134, 231, 197, 67, 153, 99, 280, 125, 199, 175, 55, 40, 168, 292, 258, 141, 5, 8, 294, 84, 106, 318, 196, 171, 172];

const pos_x4=[106, 281, 301, 169, 308, 206, 36, 202, 70, 18, 312, 200, 112, 95, 221, 123, 149, 149, 125, 269, 96, 81, 124, 229, 136, 57, 276, 269, 184, 67, 204, 108, 155, 73, 177, 42, 179, 223, 177, 98, 281, 174, 52, 210, 50, 230, 240, 35, 114, 92, 47, 263, 245, 176, 257, 149, 26, 205, 169, 173, 231, 14, 253, 139, 142, 74, 125, 114, 286, 135, 69, 234, 309, 252, 38, 79, 207, 205, 254, 236, 101, 182, 11, 155];
const pos_y4=[125, 109, 213, 317, 138, 158, 221, 85, 218, 140, 185, 12, 16, 262, 61, 166, 49, 284, 203, 145, 93, 42, 87, 174, 129, 99, 249, 204, 264, 280, 315, 290, 79, 179, 193, 249, 136, 123, 39, 212, 178, 237, 137, 221, 49, 249, 88, 75, 240, 157, 196, 40, 296, 99, 67, 184, 112, 282, 3, 164, 22, 178, 117, 18, 236, 75, 268, 50, 65, 315, 251, 204, 105, 228, 165, 121, 193, 39, 270, 147, 184, 66, 205, 212];

const pos_x5=[110, 79, 55, 159, 236, 120, 250, 83, 139, 158, 229, 118, 278, 232, 113, 37, 59, 194, 276, 203, 218, 176, 112, 91, 121, 34, 227, 164, 173, 39, 190, 284, 311, 311, 20, 261, 232, 204, 97, 175, 90, 74, 50, 303, 249, 133, 167, 191, 53, 71, 307, 125, 208, 277, 97, 15, 81, 147, 220, 143, 228, 148, 26, 175, 266, 295, 142, 206, 195, 61, 162, 259, 196, 128, 284, 90, 260, 267, 28, 279, 147, 192, 8, 250];
const pos_y5=[256, 185, 68, 111, 257, 186, 207, 34, 277, 221, 94, 92, 110, 290, 291, 206, 229, 214, 259, 306, 233, 259, 11, 89, 53, 106, 184, 7, 78, 263, 153, 207, 143, 209, 141, 159, 131, 42, 130, 300, 220, 146, 128, 169, 48, 146, 173, 126, 169, 257, 102, 218, 76, 81, 163, 184, 298, 29, 157, 72, 16, 251, 238, 33, 230, 232, 315, 260, 9, 96, 143, 132, 183, 119, 144, 61, 282, 186, 75, 54, 195, 99, 116, 75];

//cause
const pos_x6=[136, 137, 206, 142, 224, 143, 161, 206, 153, 205, 166, 158, 187, 109, 210, 128, 202, 171, 149, 167, 152, 122, 192, 194, 172, 221, 175, 106, 178, 113, 178, 107, 113, 103, 174, 121, 216, 148, 112, 107, 146, 217, 112, 140, 132, 214, 180, 224, 183, 198, 222, 168, 122, 161, 191, 207, 224, 224, 194, 128, 226, 155, 129, 100];
const pos_y6=[28, 224, 303, 156, 24, 80, 23, 113, 135, 182, 217, 54, 67, 83, 259, 294, 15, 266, 103, 325, 251, 200, 156, 206, 105, 63, 240, 172, 7, 32, 131, 231, 110, 289, 298, 321, 136, 308, 254, 138, 197, 202, 5, 5, 269, 91, 187, 228, 44, 236, 1, 81, 55, 172, 326, 41, 158, 325, 276, 128, 277, 285, 175, 209];
const rank6=[54, 19, 57, 35, 37, 2, 34, 15, 33, 61, 60, 58, 44, 17, 14, 38, 20, 26, 49, 31, 47, 1, 10, 63, 23, 41, 21, 40, 46, 9, 62, 27, 53, 56, 3, 22, 39, 36, 8, 30, 59, 7, 32, 24, 18, 45, 13, 51, 5, 12, 25, 52, 11, 48, 55, 29, 0, 4, 6, 16, 28, 42, 43, 50];

const pos_x7=[191, 122, 208, 222, 160, 182, 143, 218, 106, 110, 102, 170, 207, 115, 129, 155, 206, 220, 117, 112, 221, 219, 167, 145, 177, 141, 155, 212, 136, 177, 185, 109, 201, 193, 172, 199, 127, 149, 178, 149, 124, 157, 180, 164, 146, 225, 102, 114, 187, 152, 220, 100, 185, 102, 223, 222, 125, 102, 226, 187, 100, 135, 199, 204];
const pos_y7=[100, 307, 38, 112, 269, 16, 214, 154, 98, 3, 197, 143, 284, 44, 124, 243, 221, 88, 270, 167, 9, 325, 49, 60, 211, 177, 299, 182, 33, 120, 294, 142, 249, 139, 87, 68, 243, 154, 247, 14, 78, 325, 324, 180, 85, 207, 320, 223, 167, 120, 265, 290, 271, 66, 241, 60, 198, 250, 300, 190, 26, 285, 0, 307];
const rank7=[21, 41, 42, 46, 1, 63, 58, 26, 30, 51, 61, 12, 52, 18, 4, 50, 57, 32, 38, 15, 36, 54, 47, 16, 6, 24, 45, 56, 10, 59, 27, 43, 25, 19, 48, 7, 37, 11, 31, 33, 14, 29, 49, 3, 0, 8, 17, 34, 44, 40, 35, 53, 23, 55, 22, 13, 2, 28, 60, 5, 39, 20, 9, 62];

const pos_x8=[114, 132, 161, 139, 148, 215, 174, 121, 197, 106, 144, 148, 195, 191, 206, 168, 195, 101, 170, 159, 156, 107, 139, 114, 126, 178, 213, 211, 216, 160, 100, 189, 221, 108, 176, 218, 172, 131, 128, 138, 170, 175, 136, 102, 129, 190, 226, 195, 214, 226, 101, 102, 221, 144, 104, 185, 157, 181, 166, 205, 213, 198, 151, 124];
const pos_y8=[258, 137, 155, 284, 205, 252, 3, 301, 183, 21, 253, 85, 33, 155, 74, 325, 101, 223, 297, 122, 50, 104, 28, 77, 188, 222, 116, 223, 16, 270, 325, 274, 276, 166, 77, 312, 30, 233, 2, 167, 184, 250, 106, 280, 50, 313, 146, 206, 48, 187, 195, 50, 93, 322, 142, 125, 232, 52, 100, 293, 166, 0, 8, 211];
const rank8=[15, 30, 53, 45, 35, 7, 18, 59, 3, 43, 32, 31, 29, 0, 10, 5, 41, 37, 56, 17, 27, 25, 63, 47, 4, 50, 24, 49, 40, 8, 39, 33, 60, 2, 13, 46, 54, 1, 55, 19, 26, 42, 21, 16, 58, 52, 11, 23, 34, 14, 57, 20, 44, 51, 48, 12, 36, 22, 9, 28, 62, 6, 38, 61];

const pos_x9=[139, 185, 124, 179, 188, 216, 186, 171, 172, 201, 141, 106, 223, 116, 178, 125, 189, 153, 105, 130, 220, 169, 128, 148, 141, 205, 148, 141, 189, 149, 158, 187, 217, 192, 214, 223, 113, 111, 112, 196, 129, 218, 216, 105, 162, 164, 161, 135, 216, 102, 109, 225, 102, 225, 104, 100, 193, 150, 161, 186, 177, 226, 130, 167];
const pos_y9=[230, 206, 171, 108, 286, 78, 240, 161, 30, 3, 195, 192, 150, 59, 264, 286, 177, 3, 126, 23, 127, 63, 79, 159, 258, 264, 310, 105, 129, 49, 137, 310, 296, 61, 204, 47, 307, 103, 255, 32, 0, 231, 326, 80, 86, 192, 222, 133, 104, 155, 221, 23, 7, 178, 33, 282, 153, 282, 246, 86, 0, 254, 326, 325];
const rank9=[42, 62, 63, 26, 31, 36, 32, 4, 15, 55, 57, 14, 25, 24, 38, 61, 58, 6, 41, 0, 46, 50, 1, 34, 10, 11, 45, 53, 16, 2, 7, 23, 49, 56, 12, 30, 47, 28, 20, 18, 3, 27, 48, 37, 44, 59, 43, 22, 5, 21, 33, 13, 29, 35, 54, 39, 8, 19, 51, 52, 9, 17, 40, 60];

const pos_x10=[137, 162, 191, 142, 114, 193, 104, 135, 105, 167, 110, 192, 125, 207, 126, 148, 180, 115, 111, 150, 181, 213, 181, 129, 220, 214, 167, 112, 158, 201, 167, 223, 105, 136, 221, 205, 137, 174, 164, 101, 218, 215, 115, 129, 167, 157, 120, 191, 210, 159, 136, 202, 208, 187, 225, 186, 100, 172, 184, 184, 133, 226, 100, 158];
const pos_y10=[94, 149, 54, 165, 59, 285, 277, 237, 158, 26, 242, 186, 296, 137, 146, 204, 321, 203, 318, 307, 229, 15, 163, 7, 41, 252, 120, 109, 4, 110, 58, 220, 2, 66, 193, 318, 32, 205, 274, 26, 91, 294, 86, 266, 94, 248, 180, 24, 162, 182, 119, 209, 70, 81, 118, 256, 129, 298, 0, 136, 325, 272, 221, 225];
const rank10=[60, 16, 18, 35, 19, 57, 12, 41, 5, 6, 38, 61, 43, 55, 25, 45, 10, 7, 20, 63, 62, 31, 51, 37, 15, 17, 34, 11, 49, 46, 3, 22, 48, 8, 1, 14, 13, 59, 56, 26, 50, 54, 29, 27, 0, 44, 40, 42, 53, 52, 33, 4, 30, 2, 24, 36, 9, 39, 47, 21, 23, 28, 32, 58];

const pos_x11=[199, 152, 122, 210, 173, 218, 152, 136, 126, 197, 113, 180, 135, 105, 209, 172, 120, 159, 197, 104, 104, 173, 174, 172, 108, 100, 212, 148, 104, 182, 211, 101, 174, 207, 158, 157, 181, 125, 156, 212, 137, 139, 110, 223, 148, 101, 126, 224, 224, 183, 216, 129, 191, 142, 191, 223, 222, 154, 128, 103, 136, 196, 183, 201];
const pos_y11=[71, 76, 326, 46, 300, 275, 2, 131, 210, 235, 162, 148, 290, 310, 115, 89, 36, 260, 194, 189, 4, 43, 19, 193, 235, 270, 15, 237, 89, 259, 301, 64, 222, 168, 139, 168, 112, 109, 112, 212, 56, 185, 137, 91, 318, 112, 266, 136, 68, 322, 251, 84, 281, 25, 3, 187, 326, 210, 3, 212, 157, 94, 171, 138];
const rank11=[2, 56, 49, 44, 13, 30, 4, 12, 52, 5, 25, 46, 17, 29, 50, 27, 9, 24, 32, 39, 59, 8, 57, 18, 23, 19, 55, 41, 62, 33, 35, 10, 60, 11, 34, 63, 42, 47, 7, 14, 36, 38, 45, 37, 61, 43, 15, 28, 51, 1, 0, 48, 31, 40, 3, 21, 16, 53, 22, 26, 20, 54, 58, 6];

const gs_noi=[-0.07,-0.19,0.57,0.67,-1.29,-0.23,-0.43,-1.14,0.05,0.16,-0.95,-0.19,-1.02,-0.64,0.42,0.36,-0.02,0.79,1.4,0.17,-1.06,-0.59,0.72,-0.97,1.27,-0.37,-1.05,-0.63,0.37,-0.27,0.44,-0.11,0.06,-1.52,-0.79,-1.78,-0.01,-0.09,-0.79,0.62,-0.16,0.82,1.25,-0.42,-0.22,-0.47,-0.07,-0.02,1.01,-0.25,0.65,-1.45,-0.05,-0.29,-0.53,-0.99,0.33,-0.97,-0.73,-1.52,0.62,0.72,0.18,0.29,1.42,-0.28,-0.77,-0.28,-0.65,-0.48,0.22,-0.03,0.67,-2.29,-0.77,0.69,1.78,1.65,-1.3,0.1,0.06,-1.31,0.19,-0.34,0.31,-0.42,-1.98,-0.18,0.25,0.78,-1.68,0.59,0.5,-0.39,-0.44,0.86,0.28,0.51,-0.88,-1.07,-1.16,0.43,1.52,0.76,-0.69,0.27,0.34,-0.23,0.1,-0.8,-0.64,0.19,0.15,-0.13,-0.05,1.45,-2.28,0.17,2.82,-1.39,-1.31,0.43,-0.21,0.64,0.12,-0.71,0.46,0.42,-0.01,1.2,-0.02,0.61,-0.82,-0.58,-1.56,-0.14,0.32,0.18,-0.28,0.11,-0.01,1.34,-0.11,0.24,-2.42,0.09,0.24,1.22,-0.22,-1.75,1.67,1.18,0.64,0.83,-0.66,-0.05,0.59,-0.46,0.96,0.3,0.19,-0.72,0.03,0.38,-0.29,-0.28,0.74,1.19,-0.69,-0.83,-0.16,0,-0.16,-0.13,0.69,-0.13,-0.11,0.28,1.19,0.29,0.79,0.19,-1.06,-0.39,0.85,-0.12,0.5,1.41,0.59,-0.64,1.14,-0.44,-2.56,-1.98,-1.14,0.05,0.32,2.01,-1.44,-0.07,0.5,-1.65,1.33,0.39,0.29,1.31,0.68,0.58,0.8,1.47,-0.38,-1.62,0.59,-0.39,1.64,-1.03,-1.48,-0.51,0.07,-1.23,-0.21,0.49,1.71,0.54,0.87,0.88,-0.43,0.82,0.69,-1.26,2.09,0.72,0.38,-1.71,1.31,-2.51,-0.5,0.18,-0.52,1.41,-0.73,-2.6,-0.34,1.53,0.54,2.52,0.92,-3.22,0.15,0.53,-1.31,-1.27,1.05,-0.82,-0.21,1.17,-1.22,-0.55,0.11,-0.5,-0.66,1.04,-0.63,-0.29,-1.49,0.79,-0.46,0.14,-0.29,0.14,0.16,-0.28,-1.47,-0.23,1.33,-0.42,-0.17,0.12,0.51,-0.04,-0.84,0.23,-0.92,0.15,0.95,-0.68,-0.47,-0.44,0.16,0.84,0.42,-1.25,0.02,0.55,1.11,0.18,-1.07,-0.35,0.52,0.23,-1.2,1.4,1.45,-1.2,0.79,-0.37,0.5,0.89,0.74,-0.25,-1.38,-0.77,0.26,0.4,-0.38,-2.27,-1,-0.76,0.43,-0.42,0.45,0.18,-1.06,-1.09,-0.56,-0.6,1.23,-0.61,0.39,-0.49,0.88,-0.27,0.76,-1.57,-0.65,0.02,-1.22,-1.02,0.4,0.73,1.68,1.5,0.25,1.75,-0.76,-0.11,-0.17,-1.26,-2.49,0.78,0.05,1.58,-0.28,-0.44,-0.83,0.89,-0.26,0.47,1.7,0.31,-2.13,-0.53,-1.32,0.26,0.3,-1.29,0.29,-0.75,2.11,0.95,-1.63,1.06,0.33,-0.74,-0.21,0.13,0.05,-0.3,0.1,0.46,1.55,-0.12,0.88,-1.22,0.67,-1.9,0.63,-0.44,0.18,0.78,-0.5,1.64,-0.37,-1.61,-1.73,-0.18,-1.25,-0.89,-0.51,-0.12,1.14,-0.41,-1.52,-0.24,-0.35,-0.77,0.21,-1.27,-0.86,0.75,-0.04,0.72,0.65,0.49,0.38,-0.28,-1.06,0.2,0.47,1.33,-0.18,0.06,-1.59,0.25,0.27,-0.21,0.69,-2.06,0.2,0.22,0.1,0.91,1.39,1.85,1.02,-2.24,2.3,-0.62,-0.07,-0.12,-0.89,-0.97,0.77,0.33,-1.67,1.79,-0.19,0.83,-0.63,0.43,0.55,0.51,-1.81,1.49,-0.75,0.03,0.67,-1.52,0.98,0.29,0.94,-0.58,-0.87,0.73,1.16,0.02,-0.39,-1.68,-1.41,0.05,-0.2,-0.57,-0.84,0.93,-2.07,-0.31,-0.37,0.41,-1.1,-0.26,1,-0.87,-0.19,0.64,-0.01,-1.46,1.31,0.15,1.36,1.54,0.12,-1.68,-2.59,1.07,0.3,1.27,0.94,-1.24,-0.67,-0.81,-1.73,0.33,-0.35,-0.85,-0.1,-0.33,-0.04,0.13,2.18,0.39,-0.97,1.97,-0.24,1.42,-0.27,-0.55,-0.27,0.7,-1.16,-0.06,-0.25,-0.59,-0.62,1.8,0.43,2.41,1.31,-1.41,-0.18,0.12,0.61,-0.07,-1.08,0.25,-0.3,0.1,-0.47,-0.02,-0.77,-0.77,-0.11,0.9,0.73,0.51,-0.46,-1.64,1.18,0.02,-0.9,0.15,0.65,0.08,-0.35,0.41,1.31,-2.83,-0.46,-0.44,-0.32,-0.68,0.38,0.56,-0.61,-1.55,0.12,-0.1,0.32,-0.91,0.43,-0.7,0.33,0.8,0.04,-0.43,-0.36,-0.91,-0.75,2.1,-1.37,-0.49,1.72,1.16,-0.59,0.41,1.89,0.56,-0.21,0,-0.03,0.13,-0.35,0.41,1.11,1.19,-1.74,-0.6,-0.49,-0.17,1.31,-1.07,-0.93,-0.04,0.04,0.97,-0.07,0.72,-0.74,-0.98,-1.24,-2.06,0.53,0.7,-0.21,0.35,-0.72,-1.29,0.82,-0.07,-1.9,0.35,0,-2.01,-0.4,1.99,0.51,0.18,0.59,-0.01,-1.01,1.02,1.79,-1,-0.64,1.52,-1.01,0.97,0.33,0.08,0.46,0.72,-0.47,0.28,-0.08,0.87,-0.07,-1.15,-2.17,-0.11,0.11,-0.27,0.64,1.59,-0.24,-1.82,-0.87,-0.96,-0.95,-0.85,-0.08,-0.78,0.42,-1.95,-1.11,-0.68,-0.61,0.28,-0.75,0.37,1.27,1.07,-1.17,0.07,0.34,-1.21,1.18,-0.7,1.01,-0.22,0.31,1.94,0.33,-1.27,1.02,-0.05,0.24,0.7,-0.44,-1.9,-0.67,-0.11,0.48,1.14,-0.47,0.24,0.59,-0.56,1,-0.29,0.06,-0.01,-0.29,2.07,-1.08,0.6,-0.13,-0.61,-0.88,0.31,1.47,-0.54,0.87,-0.28,-0.55,-1.72,-0.79,-0.57,0.23,-0.03,-0.82,-1.84,0.58,-0.66,0.22,-1.52,-1.48,0.74,0.03,0.08,0.07,-0.63,0.07,-0.97,0.02,-1.06,0.42,-0.7,0.99,2.26,1.34,0.77,0.37,0.78,0.19,0.38,-2.37,-0.03,-0.8,0.27,0.83,1.1,2.71,-0.95,-1.48,-1.32,-1.9,-0.29,-0.04,-0.32,-1.38,1.48,-0.39,0.78,-0.4,0.22,1.44,2.61,0.59,-0.94,-0.98,-0.32,0.46,-0.62,1.2,1.37,-0.47,0.81,1.06,0.97,-0.32,0.19,-0.3,-0.07,1.4,-0.15,-0.22,0.41,0.72,-0.63,-0.22,1.36,-1.3,0.87,0.01,0.67,1.2,1.97,1.41,-0.42,0.89,-2.56,-0.02,-1.15,1.63,0.25,-0.75,0.87,-2.09,0.74,0.84,1.38,-0.69,2.01,-0.75,0.36,-0.26,-0.4,-1.55,0.42,-0.34,0.98,-0.03,0.24,0.38,1.54,0.96,0.11,0.7,0.9,0.05,-1.38,0.11,0.72,-0.69,-0.29,1.47,1.1,0.23,0.17,1.37,1.26,1.34,-0.43,-0.08,0.06,1.24,0.2,1.59,0.03,-1.05,0.14,1.8,0.92,-0.56,1.49,-0.55,-1.62,-0.29,1.42,-0.92,0.04,0.43,-0.64,0.44,-1.44,0.28,1.27,0.9,-1.5,-0.31,0.27,-0.16,-1.36,1.38,-0.47,-0.18,-0.4,-0.54,0.33,-1.26,-1.5,-0.2,0.25,1.01,0.71,-0.5,-0.6,0.74,-0.68,0.73,-0.91,1.09,0.88,0.01,0.94,-0.54,0.69,-0.63,-0.02,0.88,1.31,2.2,0.13,-1.25,-0.47,0.12,0.96,-1.41,0.16,0.44,0.89,-0.65,1.33,0.97,-0.42,-0.5,0.88,-0.79,-0.1,-0.03,-0.8,0.46,-0.75,-0.47,-2.28,-0.16,1.02,0,-0.53,-1.58,-1.21,0.47,-0.43,-0.58,1.41,-1.05,0.51,1.17,0.25,0.74,0.01,-0.97,-0.16,0.33,-0.31,-1.24,1.33,0.91,0.6,-0.56,-1.72,-1.2,-0.48,-0.45,1.09,-0.29,0.48,-1.47,-1.01,1.78,-1.07,-0.9,-0.04,0.09,3.33,-0.11,1.91,0.99,1.68,-0.47,0.65,0.68,-1.45,-0.21,0.93,-0.55,-1.34,1.5,-0.15,-1.03,1.01,1.52,-0.55,0.6,-0.67,0.3,-0.53,1.78,0.13,0.06,0.42,0.11,1.02,0.67,-1.1,-2.28,-1.25,-1.45,0.49,0.8,-0.73];


// function myrank(e){
// 	var rk=new Array;
// 	var x=e.slice();
// 	x.sort((a, b) => b - a);
// 	for (var k=0;k<x.length;k++){
// 		if (k==0 || x[k]!=x[k-1]){
// 			for (var m=0;m<e.length;m++){
// 				if (e[m]==x[k]){rk.push(m)}
// 			}
// 		}
// 	}
// 	return(rk)
// }